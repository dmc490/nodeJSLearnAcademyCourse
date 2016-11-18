/**
 * Created by userr on 18/11/2016.
 */
const GitHubStrategy = require('passport-github').Strategy
const db = require('../db')

module.exports = new GitHubStrategy({
        clientID:"b1cd1b31682ad8fdf9ce",
        clientSecret:"cbddba97ba915369ef9b4c07826e7d0d5bade3ce",
        callbackURL:"http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done){
        db("users")
            .where("oauth_provider","github")
            .where("oauth_id",profile.username)
            .first()
            .then((user)=>{
                if(user){
                    return done(null,user)
                }

                const newUser = {
                    oauth_provider:"github",
                    oauth_id:profile.username,
                }

                return db("users")
                    .insert(newUser)
                    .then((ids)=>{
                        newUser.id = ids[0]
                        done(null,newUser)
                    })
            })
    }
)