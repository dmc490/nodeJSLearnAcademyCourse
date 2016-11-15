/**
 * Created by userr on 15/11/2016.
 */
import express  from "express"
const router = express.Router()

import { homepage, profile } from '../handlers'

router

    .get("/",(req,res) => {
        //homepage(req,res)
        res.send(users);
    }).get("/:id",(req,res) => {
        const { id } = req.params
        const user = users.find(user=> user.id == id )
        if (user) {
            res.send(user);
        } else {
            res.status(404).send(`User ${id} does not exist`)
        }
    }).delete("/:id",(req,res) => {
        const { id } = req.params
        const index = users.findIndex(user => user.id == id)
        if (index > -1){
            users.splice(index,1)
            res.sendStatus(200);
        } else {
            res.status(404).send(`User ${id} does not exist`)
        }
    }).post("/",(req,res)=>{
    console.log(req.body)
    res.send("OK!")
    })

module.exports = router

var users = [{
    "id": 1,
    "first_name": "Julia",
    "last_name": "Grant",
    "email": "jgrant0@buzzfeed.com",
    "gender": "Female",
    "ip_address": "68.224.72.160"
}, {
    "id": 2,
    "first_name": "Donald",
    "last_name": "Shaw",
    "email": "dshaw1@columbia.edu",
    "gender": "Male",
    "ip_address": "70.25.202.39"
}, {
    "id": 3,
    "first_name": "Kimberly",
    "last_name": "Powell",
    "email": "kpowell2@nymag.com",
    "gender": "Female",
    "ip_address": "117.130.125.129"
}, {
    "id": 4,
    "first_name": "Eric",
    "last_name": "Nelson",
    "email": "enelson3@home.pl",
    "gender": "Male",
    "ip_address": "28.213.35.81"
}, {
    "id": 5,
    "first_name": "Todd",
    "last_name": "Gardner",
    "email": "tgardner4@tuttocitta.it",
    "gender": "Male",
    "ip_address": "204.149.42.102"
}, {
    "id": 6,
    "first_name": "Dennis",
    "last_name": "Willis",
    "email": "dwillis5@biglobe.ne.jp",
    "gender": "Male",
    "ip_address": "66.170.149.164"
}, {
    "id": 7,
    "first_name": "Jeffrey",
    "last_name": "Gonzales",
    "email": "jgonzales6@slashdot.org",
    "gender": "Male",
    "ip_address": "50.52.144.137"
}, {
    "id": 8,
    "first_name": "Harold",
    "last_name": "Stevens",
    "email": "hstevens7@yahoo.co.jp",
    "gender": "Male",
    "ip_address": "25.84.228.173"
}, {
    "id": 9,
    "first_name": "Cynthia",
    "last_name": "Chavez",
    "email": "cchavez8@blinklist.com",
    "gender": "Female",
    "ip_address": "145.11.39.133"
}, {
    "id": 10,
    "first_name": "Susan",
    "last_name": "Robertson",
    "email": "srobertson9@skype.com",
    "gender": "Female",
    "ip_address": "96.209.225.242"
}, {
    "id": 11,
    "first_name": "Dennis",
    "last_name": "Phillips",
    "email": "dphillipsa@1und1.de",
    "gender": "Male",
    "ip_address": "250.153.220.214"
}, {
    "id": 12,
    "first_name": "Christopher",
    "last_name": "Wright",
    "email": "cwrightb@oaic.gov.au",
    "gender": "Male",
    "ip_address": "240.138.5.179"
}, {
    "id": 13,
    "first_name": "Helen",
    "last_name": "Carpenter",
    "email": "hcarpenterc@springer.com",
    "gender": "Female",
    "ip_address": "161.110.237.166"
}, {
    "id": 14,
    "first_name": "Ashley",
    "last_name": "Reid",
    "email": "areidd@mapquest.com",
    "gender": "Female",
    "ip_address": "80.75.122.240"
}, {
    "id": 15,
    "first_name": "Ernest",
    "last_name": "Roberts",
    "email": "erobertse@huffingtonpost.com",
    "gender": "Male",
    "ip_address": "103.131.161.102"
}, {
    "id": 16,
    "first_name": "Irene",
    "last_name": "Williams",
    "email": "iwilliamsf@microsoft.com",
    "gender": "Female",
    "ip_address": "107.122.61.209"
}, {
    "id": 17,
    "first_name": "Irene",
    "last_name": "Henry",
    "email": "ihenryg@flavors.me",
    "gender": "Female",
    "ip_address": "230.137.227.4"
}, {
    "id": 18,
    "first_name": "Mildred",
    "last_name": "Edwards",
    "email": "medwardsh@last.fm",
    "gender": "Female",
    "ip_address": "127.89.40.202"
}, {
    "id": 19,
    "first_name": "Louise",
    "last_name": "Robertson",
    "email": "lrobertsoni@loc.gov",
    "gender": "Female",
    "ip_address": "73.74.96.41"
}, {
    "id": 20,
    "first_name": "Marilyn",
    "last_name": "Walker",
    "email": "mwalkerj@multiply.com",
    "gender": "Female",
    "ip_address": "50.238.226.93"
}]


