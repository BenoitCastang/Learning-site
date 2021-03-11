const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('vanessa a de beaux yeux, de beaux cils')
// })
app.put('/benoit', (req, res) => {
    console.log(req.body)
})
app.put('/nom', (req, res) => {
    console.log(req.body)
    res.send(`c'est ${req.body.name}`)
})



//Démarrage de l'app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})