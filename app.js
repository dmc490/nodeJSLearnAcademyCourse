/**
 * Created by userr on 13/11/2016.
 */
var math = require('./math');
var fs = require('fs');
var _ = require('lodash');
var axios = require('axios');
axios.get("http://rest.learncode.academy/api/myuser/friends").then((res)=>{
    var jake = _.find(res.data,{name:"Jake"})
    console.log(jake)
});
//console.log(_.snakeCase("someValue"));
