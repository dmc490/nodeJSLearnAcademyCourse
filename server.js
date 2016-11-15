/**
 * Created by userr on 15/11/2016.
 */
const express  = require("express")
const favicon = require('serve-favicon')
const app = express()
/*import bodyParser from "body-parser"
import { homepage, profile } from './handlers'
import users from "./routes/users"*/
var staticAssets = __dirname + "/public"
var faviconPath = __dirname + "/public/favicon.ico"

app
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .get("/",(req,res)=>{
        "use strict";
        let title = "some title"

        res.send(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Title</title>
                    <link href="css/custom.css" rel="stylesheet"/>
                </head>
                <body>
                    <h1>${title}</h1>
                    <script src="js/main.js"></script>
                </body>
            </html>
        `)
    })
    .get('/api/profile',(req,res)=>{
        var profile = {name: "Will"}
        res.send(profile)
    })
    /*.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use("/users",users)*/

app.listen(3000)