/**
 * Created by userr on 15/11/2016.
 */
exports.homepage = function (req,res) {
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Hello</h1>")
}

exports.profile = function (req,res) {
    var profile = {
        name: "Will",
        age: 35
    }
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(profile))
}

exports.notFound = function (req,res) {
    res.statusCode = 404
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>404 Not Found!</h1>")
}