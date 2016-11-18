/**
 * Created by userr on 17/11/2016.
 */
const knex = require('knex')

const db = knex({
    client:"mysql",
    connection: {
        host: "127.0.0.1",
        user:"admin",
        database:"devdb"
    }
})

module.exports = db
