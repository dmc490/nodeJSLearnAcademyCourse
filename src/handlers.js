/**
 * Created by userr on 15/11/2016.
 */
export function homepage (req,res) {
    res.send("<h1>TO</h1>")
}

export function profile (req,res) {
    let profile = {name:"Will", age:22}
    res.send(profile)
}
/*exports.profile = function (req,res) {
    var profile = {
        name: "Will",
        age: 35
    }
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(profile))
}*/