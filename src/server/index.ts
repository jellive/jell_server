import Express from 'express'
import mainRouter from './router'
import bodyParser from 'body-parser'

const port = 18000

const dev = process.env.NODE_ENV !== 'production'
const server = Express()

server.use('/', mainRouter)

// use ejs
server.set('views', __dirname + '/../views')
server.set('view engine', 'ejs')
server.engine('html', require('ejs').renderFile)


server.listen(port, 'localhost', (err) => {
    if (err) throw err
    console.log('jell server start. port:' + port)
})

server.use(Express.static('public'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));