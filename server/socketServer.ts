import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const CLIENT_URL = process.env.CLIENT_URL
const PORT = 4000

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        // origin: CLIENT_URL
        origin: '*',            // for testing only
    }
})

let chatMsgs = []

io.on('connection', (socket) => {
    console.log('User connected.')

    socket.on('send_msg', (data) => {
        // console.log(data)
        chatMsgs.push({id: socket.id, ...data})

        io.emit("chatMsgs", chatMsgs)
    })
})

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})







// import express from "express"

// import { Server } from 'socket.io'
// import { createServer } from 'node:http'

// const app = express()
// const server = createServer(app)

// const io = new Server(server, {
//     cors: {
//         origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow requests from your client
//         methods: ['GET', 'POST'],
//     },
//     transports: ['polling', 'websocket'], // Explicitly specify transports
// });

// app.get('/', (req, res) => {
//     // res.send('<h1>test....</h1>')
// })

// io.on('connection', (socket) => {
//     // console.log('a user connected')

//     socket.on("connect", () => {
//         console.log("WS connected.")
//     })

//     socket.on('send_msg', (msg) => {
//         console.log('message: ', msg)
//     })

//     socket.on("connection_error", (err) => {
//         console.error(`WS error due to ${err}`)
//     })

//     socket.on('error', (err) => {
//         console.log('WS general error', err);
//     });

//     socket.on('disconnect', () => {
//         console.log('WS disconnected.')
//     })
// })

// server.listen(3001, () => {
//     console.log('server running')
// })