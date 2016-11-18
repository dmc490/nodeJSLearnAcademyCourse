/**
 * Created by userr on 17/11/2016.
 */
const db = require('./db')
const passport = require('passport')
const bcrypt = require("bcrypt-nodejs")
const LocalStrategy = require('passport-local').Strategy
//const GitHubStrategy = require('passport-github').Strategy
const GitHubStrategy = require('./oauth/github')

passport.use(new LocalStrategy(authenticate))
passport.use("local-register",new LocalStrategy({passReqToCallback:true},register))
passport.use(GitHubStrategy)

function authenticate(email, password, done){
    db("users")
        .where("email",email)
        .first()
        .then(user => {
            if (!user || !bcrypt.compareSync(password,user.password)){
                return done(null,false,{message:"invalid user or password"})
            }

            done(null,user)
        },done)
}

function register(req,email, password, done){
    db("users")
        .where("email",email)
        .first()
        .then((user)=>{
            if(user){
                return done(null,false,{message:"email already created"})
            }
            if(password !== req.body.password2){
                return done(null,false,{message:"passwords don't match"})
            }

            const newUser = {
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email,
                password:bcrypt.hashSync(password),
                //is_admin:true
            }

            db("users")
                .insert(newUser)
                .then((ids) => {
                    newUser.id = ids[0]
                    done(null,newUser)
                })
        },done)
}
passport.serializeUser(function(user,done){
    done(null,user.id)
})
passport.deserializeUser(function(id,done){
    db("users")
        .where("id",id)
        .first()
        .then((user)=>{
            done(null,user)
        },done)
})