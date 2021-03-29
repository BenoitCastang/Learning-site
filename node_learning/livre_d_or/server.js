// npm i s nodemon into console + package.json script start nodemon sever.js to edit live 
// console.log('Der junge trinkt und das mädchen liest.');

// initialisation of express
// let app = require('express')()
let express = require('express')
let app = express()
// initialisation of body parser to parse data
let bodyParser = require('body-parser')

// initialisation of the template engine
app.set('view engine', 'ejs')


// Middleware 

// set path to static files (css) in local directory, and set url path to static files: localhost/assets/semantic/file url
// app.use('/assets', express.static('public'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routing
app.get('/', (request, response) => {
    // // html rendering
    // response.send('Here we are at root.')
    // // view rendering, with two parameters the file path and the var
    // creates var test in pages/index
    response.render('pages/index', {test: 'salut'})
})

app.post('/', (request, response) => {
    console.log(request.body.message);
    if (request.body.message === undefined || request.body.message === '') {
        response.render('pages/index', {error: 'Your message is empty ToT'})
        console.log(error);
    }
})

app.listen(8080)