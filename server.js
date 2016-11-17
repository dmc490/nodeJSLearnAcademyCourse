/**
 * Created by userr on 15/11/2016.
 */
const express  = require("express")
const favicon = require('serve-favicon')
const app = express()
const knex = require('knex')
const session = require('express-session')
/*import bodyParser from "body-parser"
import { homepage, profile } from './handlers'
import users from "./routes/users"*/
var staticAssets = __dirname + "/public"
var faviconPath = __dirname + "/public/favicon.ico"

const db = knex({
    client:"mysql",
    connection: {
        host: "127.0.0.1",
        user:"admin",
        database:"devdb"
    }
})

app
    //.set("views",__dirname + "/views")
    .use(session({secret:"i love cats",resave:false,saveUninitialized:false}))
    .set("view engine","hjs")
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .get("/",(req,res)=>{
        db("users").then(users=>{
            res.send(users)
        }).catch((err)=>{
            res.send(err)
        })
        //res.send(req.session)
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