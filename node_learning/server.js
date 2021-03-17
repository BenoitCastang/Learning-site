// Include module HTTP
let http = require('http')
// Include module file to read files
let fs = require('fs')
// Create a instance of HTTP server
// Never forget to run ctrl + C in console to reset server
let server = http.createServer() 
// Then run server via console with 'node server.js'
// Into server, listen event request and run function with two parameters request and response
// If i run localhost:8080 into my browser, terminal console logs 'there is a request'
server.on('request', (request, response) => {
    console.log('there is a request')
    // Tell me everything is fine (200 means no error)
    response.writeHead(200, {
        // Precise content type
        'Content-type': 'text/html; charset=utf-8'
    })
    // End connection and display text
    response.end('Everything is fine.')
})
// Define a server port (error EACESS means port already used)
server.listen(8080)