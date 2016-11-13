/**
 * Created by userr on 13/11/2016.
 */
var assert = require("assert")
var math = require('./math')

assert(math.add(3,4) === 7)
assert(math.sub(3,4) === -1)
assert(math.mul(3,4) === 12)
console.log("all tests passed")