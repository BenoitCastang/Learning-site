// Include module express which is a function
// It's not necessary anymore to emit and listen to events, now we use request methods
// I can start it with script npm [run] start (see package.json), that I can modify at will to run npm start instead of whatever command
// Just run npm install and thanks to packages.js all relevent dependencies are downloaded
let express = require('express')
let app = express()
// // ou, en une seule ligne :
// let app = require('express')()

// I dont listen to event root request, I get root url end send response
app.get('/', (request, response) => {
    response.send('Here im at root.')
})
app.get('/index', (request, response) => {
    response.send('Here you are at index.')
})
// app.addListener('error', (request, response) => {
//     response.write(`You tried to reach ${request.url} but this file does not exist.`)
// })

app.listen(8080)