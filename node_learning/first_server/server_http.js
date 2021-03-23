// // install express : npm i -s express into console (for npm install --save)
// nmp = node package manager
// // Include module HTTP
// let http = require('http')
// // Include module file System in order to read files
// let fs = require('fs')
// // Include module url to parse url
// let url = require('url')
// // Include module events containing EventEmitter class
// let EventEmitter = require('events')

// -----------------------------------------

// Create a instance of HTTP server
// http.create server is an .emit of a request
// Never forget to run ctrl + C in console to reset server
// let server = http.createServer() 
// Then run server via console with 'node server.js'
// Into server, listen event request and run function with two parameters/objects request and response
// emitter.on method is shortcut for emitter.addlistener(eventName, listener)
// If i run localhost:8080 into my browser, terminal console logs 'there is a request'
// server.on('request', (request, response) => {
//     // response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
//     // url.parse method get two parameters url string and parseQueryString bool
//     // parseQueryString true means it parses also the query string and false means it doesnt
//     // When you parse the query string you got an object
//     // puts in query url query parsing only 
//     let query = url.parse(request.url, true).query;
//     // if (query.name === undefined) {
//     //     response.write('Bonjour à vous, cher visiteur anonyme !')
//     // } else {
//     //     response.write(`Bonjour à toi, ${query.name}.`)
//     // }
//     // response.end() 
//     // console.log('there is a request')
//     // if query.name === undefined, then query.name = 'anonyme', else query.name = query.name
//     let name = query.name === undefined ? 'anonyme' : query.name
//     // method fs.readFile(path[, options], callback)
//     // without 'utf8' option, callback isnt a string but a buffer, rather used for photos and videos
//     // if callback has an error, it places it in error and the code sends it back
//     // if callback has no error, it places the data he found in data and sends it back for the global function to return it
//     fs.readFile('index.html', 'utf8', (error, data) => {
//         // this if section tells me how it works or doesnt, it is not necessary
//         // if error exists describe it in console
//         // if (error) throw error
//         if (error) {
//             response.writeHead(404) 
//             response.end('ERROR 404 : This file doesn\'t exist.')
//         } else {
//             // from here we consider callback sent back fine the data
//             // Tell me everything is fine (200 means no error)
//             response.writeHead(200, {
//                 // Precise content type
//                 'Content-type': 'text/html; charset=utf-8'
//             })
//         }
//         // // display data in response
//         // response. write(data)
//         // // end co nnection
//         // response.end()
//         // method data.replace retrieves {{string}} in .html and replaces it with data, BUT only one time, it seems
//         data = data.replace('{{name}}', name)
//         // end connection AND display data
//         response.end(data)
//     })
// })

// // instance of EventEmitter object
// let eventEmitter = new EventEmitter()
// // creation of an event blabla, followed by running a function ; can also run eventEmitter.once to run it once instead of number of .emit
// eventEmitter.addListener('blabla', (a, b) => {
//     console.log('We did blabla.', `First parameter is ${a} and second is ${b}.`);
// })
// // trigger event blabla (with parameters)
// eventEmitter.emit('blabla', 40, 50)
// eventEmitter.emit('blabla')
// eventEmitter.emit('blabla')

// let app = require('./app').start(8080)
// app.addListener('root', function (response) {
//     response.write('Here im at root.')
// })
// app.addListener('index', (response) => {
//     response.write('Here you are at index.')
// })
// app.addListener('error', (request, response) => {
//     response.write(`You tried to reach ${request.url} but this file does not exist.`)
// })

// ---------------------------------------------  -

// Define a server port (error EACESS means port already used)
// server.listen(8080)