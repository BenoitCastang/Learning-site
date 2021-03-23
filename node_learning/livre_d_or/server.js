// npm i s nodemon into console + package.json script start nodemon sever.js to edit live 
// console.log('Der junge trinkt und das mädchen liest.');

// initialisation of express
// let app = require('express')()
let express = require('express')
let app = express()

// initialisation of the template engine
app.set('view engine', 'ejs')

// set path to static files (css) in local directory, and set url path to static files: localhost/assets/semantic/file url
// app.use('/assets', express.static('public'))
app.use(express.static('public'))

// Routing
app.get('/', (request, response) => {
    // // html rendering
    // response.send('Here we are at root.')
    // // view rendering, with two parameters the file path and the var
    response.render('pages/index', {test: 'salut'})
})

app.listen(8080)