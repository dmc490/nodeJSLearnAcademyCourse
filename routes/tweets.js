/**
 * Created by userr on 18/11/2016.
 */
const passport = require("passport")
const router = require("express").Router()
const db = require('../db')

function loginRequired(req,res,next){
    if(!req.isAuthenticated()){
        return res.redirect("/login")
    }

    next()
}

function adminRequired(req,res,next){
    if(!req.user.is_admin){
        return res.render("403")
    }
    next()
}

router
    .get('/tweets',loginRequired,(req,res,next)=>{

        db("tweets")
            .where("user_id", req.user.id)
            .then((tweets)=> {
                res.render("tweets", {
                    title: "Your Tweets",
                    tweets
                })
            })

    })
    .get('/allTweets',loginRequired,adminRequired,(req,res, next)=>{
        db("tweets")
            .then((tweets)=>{
                res.render("tweets",{
                    title:"all users tweets",
                    tweets
                })
            })
    })
    .get('/deleteTweet/:id',loginRequired,(req,res,next)=>{

        const query = db("tweets").where("id",req.params.id)
        if (!req.user.is_admin){
            query.where("user_id",req.user.id)
        }
        query
            .delete()
            .then((result)=> {
                if (result === 0) {
                    res.send("Error, could'nt find Tweet to delete")
                }
                res.redirect("/tweets")
            })

    })

module.exports = router