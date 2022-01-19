const express = require("express")

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const projectsRoute = require('./routes')

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use('/api', projectsRoute)

app.get

io.on('connection', (socket) => {
    let randomN = parseInt(Math.random() * 10)
    console.log(`-> a user connected: ${randomN}`);
    socket.on('disconnect', () => {
        console.log('-> a user disconnected');
    })
    socket.emit('newConnection', `-> a new page opened - ${randomN}`)
})

http.listen(port, () => {
    console.log('-> server listening on port: ', port);
})