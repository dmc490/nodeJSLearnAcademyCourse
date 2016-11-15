/**
 * Created by userr on 15/11/2016.
 */
import express  from "express"
const app = express()
import bodyParser from "body-parser"
import { homepage, profile } from './handlers'
import users from "./routes/users"


app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use("/users",users)

app.listen(3000)