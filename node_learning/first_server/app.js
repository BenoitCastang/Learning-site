// App creation seperately

// Include module HTTP
let http = require('http')
// Include module file System in order to read files
let fs = require('fs')
// Include module url to parse url
let url = require('url')
// Include module events containing EventEmitter class
let EventEmitter = require('events')

let App = {
    start: function (port) {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response) => {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            if (request.url === '/') {
                emitter.emit('root', response)
            } else if (request.url === '/index') {
                emitter.emit('index', response)
            } else {
                emitter.emit('error', request, response)
            } 
            response.end()
        }).listen(port)
        return emitter
    }
}
module.exports = App