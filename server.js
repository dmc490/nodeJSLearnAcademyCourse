/**
 * Created by userr on 15/11/2016.
 */
const express  = require("express")

const app = express()
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const cache = require('./cache')
const passport = require("passport")
const db = require('./db')
require("./passport")
const authRoutes = require("./routes/auth")
const tweetsRoutes = require("./routes/tweets")
const bodyParser = require("body-parser")
/*import bodyParser from "body-parser"
import { homepage, profile } from './handlers'
import users from "./routes/users"*/
const favicon = require('serve-favicon')
var staticAssets = __dirname + "/public"
var faviconPath = __dirname + "/public/favicon.ico"


app
    //.set("views",__dirname + "/views")
    .use(session({secret:"i love cats",
        store:new RedisStore(),
        resave:false,
        saveUninitialized:false}))
    .use(passport.initialize())
    .use(passport.session())
    .set("view engine","hjs")
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .use(authRoutes)
    .use(tweetsRoutes)
    .get("/",cache.route({expire:5,prefix:"home"}),(req,res,next)=>{
        /*db("users").then(users=>{
            res.send(users)
        }).catch((err)=>{
            res.send(err)
        })*/
        setTimeout(()=>{
            res.send({
                session: req.session,
                user:req.user,
                authenticated:req.isAuthenticated(),
            })
        },2000)

        /*
        let title = "some other title"
        let tweets = ["a", "b", "c"]
        res.render("index",{
            title:title,
            tweets:tweets,
            showTweets:true,
            partials:{
                header:"header",
                tweets:"tweets"
            }
        })*/
    })
    .get('/api/profile',(req,res)=>{
        var profile = {name: "Will"}
        res.send(profile)
    })
    .get('/setSession',(req,res)=>{
        req.session.name = "Will"
        res.send(req.session)
    })

    /*.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use("/users",users)*/

app.listen(3000)