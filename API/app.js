const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());

const mySqlUtilities = require('./utilities/mySqlUtilities')

// Calling class Personnes
const user = require('./classes/classes')
// Call instance via new var trigerring class Person
const user1 = new user(null, 'Jin', 'Kaneda')

// GET personnes
app.get('/personnes', (req, res) => {
    console.log('got personnes')
    mySqlUtilities.getUsers((result, error) => {
        if(!error) {
            res.send(result)
        } else {
            res.status(500).send(error)
        }
    })
})

// ADD personnes
app.post('/personnes', (req, res) => {
    const user1 = new user(null, req.body.nom, req.body.prenom)
    console.log("added personnes")
    mySqlUtilities.addUsers(
        user1,
        (result, error) => {
        if(!error) {
            res.send(`inserted into id no.${result.insertId}`)
        } else {
            res.status(500).send(error)
        }
    })
})

app.get('/hello/:id', (req, res) => {
    console.log(params)
    var params = req.params
    res.send(params.id)
    res.send(req.body)
})
app.put('/hello', (req, res) => {
    res.send(req.body.nom)
})

//GET one of personnes
app.get('/personnes/:id', (req, res) => {
    console.log('got one of personnes');
    mySqlUtilities.getOneUser((result, error) => {
        if(!error) {
            res.send(result)
        } else {
            res.status(500).send(error)
        }
    },() => {
        res.send(params)
    })
})

// //DELETE one of personnes
// app.delete('/personnes/mitsuda', (req, res) => {
//     console.log('deleted one of personnes');
//     mySqlUtilities.deleteOneUser((result, error) => {
//         if(!error) {
//             res.send(`Deleted ${result.affectedRows} user.`)
//         } else {
//             res.status(500).send(error)
//         }
//     }, () => {
//         res.send(user1)
//     })
// })

// //MODIFY one of personnes
// app.put('/personnes/mitsuda', (req, res) => {
//     console.log('modified one of personnes');
//     mySqlUtilities.modifyOneUser((result, error) => {
//         if(!error) {
//             res.send(`${result.affectedRows} data affected.`)
//         } else {
//             res.status(500).send(error)
//         }
//     }, () => {
//         res.send(user1)
//     })
// })


//Démarrage de l'app : ctrl + C to reset server then "node app.js"  console
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})