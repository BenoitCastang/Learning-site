// ------------------------------------
// API HEAD
//-------------------------------------

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());

const mySqlUtilities = require('./utilities/mySqlUtilities')

// Calling class Personnes
const user = require('./classes/classes')
// Call instance via new var trigerring class Person
// const user1 = new user(null, 'Jin', 'Kaneda')

// ------------------------------------
// BODY REQUESTS
//-------------------------------------

// GET personnes
app.get('/personnes', (req, res) => {
    console.log('got personnes')
    mySqlUtilities.getUsers(
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(result)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

// ADD personnes
app.post('/personnes', (req, res) => {
    // req.body = json code insomnia sends
    const user1 = new user(null, req.body.nom, req.body.prenom)
    console.log("added personnes")
    mySqlUtilities.addUsers(
        //parameter 1
        user1,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(`inserted into id no.${result.insertId}`)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

//GET one of personnes
app.get('/personnes/oneUser', (req, res) => {
    // req.body = json code insomnia sends
    const user1 = new user(req.body.id, req.body.nom, req.body.prenom)
    console.log('got one of personnes');
    mySqlUtilities.getOneUserById(
        // parameter user1
        user1,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(result)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

//DELETE one of personnes
app.delete('/personnes/oneUser', (req, res) => {
    // req.body = json code insomnia sends
    const user1 = new user(req.body.id, req.body.nom, req.body.prenom)
    console.log('deleted one of personnes');
    mySqlUtilities.deleteOneUserById(
        // parameter user1
        user1,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(`Deleted ${result.affectedRows} user.`)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

//MODIFY one of personnes
app.put('/personnes/oneUser', (req, res) => {
    // req.body = json code insomnia sends
    const user1 = new user(req.body.id, req.body.nom, req.body.prenom)
    console.log('modified one of personnes');
    mySqlUtilities.modifyOneUserById(
        // parameter user1
        user1,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(`${result.affectedRows} data affected.`)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

// ------------------------------------
// LINK REQUESTS
//-------------------------------------

// GET user by id
app.get('/personnes/:id', (req, res) => {
    // :id creates id parameter
    // write url /hello/value to enter new parameter value
    // req.params = url insomnia sends
    console.log('got one of personnes');
    var params = req.params
    mySqlUtilities.getOneUserByIdLink(
        // parameter params
        params,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(result)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

// DELETE user by id
app.delete('/personnes/:id', (req, res) => {
    // :id creates id parameter
    // write url /hello/value to enter new parameter value
    // req.params = url insomnia sends
    console.log('deleted one of personnes');
    var params = req.params
    mySqlUtilities.deleteOneUserByIdLink(
        // parameter params
        params,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(`Deleted ${result.affectedRows} user.`)
            } else {
                res.status(500).send(error)
            }
        }
    )  
})

//MODIFY user by id
app.put('/personnes/:id', (req, res) => {
    // req.body = json code insomnia sends
    var params = req.params
    const user1 = new user(params.id, req.body.nom, req.body.prenom)
    console.log('modified one of personnes');
    mySqlUtilities.modifyOneUserByIdLink(
        // parameter user1
        user1,
        // parameter callback
        (result, error) => {
            if(!error) {
                res.send(`${result.affectedRows} data affected.`)
            } else {
                res.status(500).send(error)
            }
        }
    )
})

// ------------------------------------
// API RUN
//-------------------------------------

//Démarrage de l'app : ctrl + C to reset server then "node app.js"  console
app.listen(port, () => {
    console.log(`app.js listening at http://localhost:${port}`)
})