const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());

const mySqlUtilities = require('./utilities/mySqlUtilities')
const user = require('./classes/classes')


// GET personnes
app.get('/personnes', (req, res) => {
    console.log('got personnes')
    // const personne = new Personne(req.body.nom, req.body.prenom)
    mySqlUtilities.getUsers((result, error) => {
        if(!error) {
            res.send(personne.prenom)
        } else {
            res.status(500).send(error)
        }
    })
})

// POST personnes
app.post('/personnes', (req, res) => {
    console.log("added personnes")
    mySqlUtilities.addUsers((result, error) => {
        if(!error) {
            res.send(`inserted into id no.${result.insertId}`)
        } else {
            res.status(500).send(error)
        }
    },() => {
        res.send(user.nom)
    })
})

//GET one of personnes
app.get('/personnes/mitsuda', (req, res) => {
    console.log('got one of personnes');
    mySqlUtilities.getOneUser((result, error) => {
        if(!error) {
            res.send(result)
        } else {
            res.status(500).send(error)
        }
    })
})

//DELETE one of personnes
app.delete('/personnes/mitsuda', (req, res) => {
    console.log('deleted one of personnes');
    mySqlUtilities.deleteOneUser((result, error) => {
        if(!error) {
            res.send(result)
        } else {
            res.status(500).send(error)
        }
    })
})

//PUT one of personnes
app.put('/personnes/mitsuda', (req, res) => {
    console.log('modified one of personnes');
    mySqlUtilities.modifyOneUser((result, error) => {
        if(!error) {
            res.send(`${result.affectedRows} donnée(s) affectée(s).`)
        } else {
            res.status(500).send(error)
        }
    })
})

//Démarrage de l'app : écrire "node ./API/app.js" dans la console
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})