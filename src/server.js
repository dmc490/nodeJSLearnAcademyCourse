/**
 * Created by userr on 15/11/2016.
 */
import http from 'http'
import { homepage, notFound } from './handlers'
var server = http.createServer((req,res) => {
    homepage(req,res)
})

server.listen(3000)