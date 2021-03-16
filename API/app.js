const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());

// // app.get('/', (req, res) => {
// //     res.send('vanessa a de beaux yeux, de beaux cils')
// // })
// app.get('/nobody', (req, res) => {
//      class Odysseus {
//          constructor(firstname, lastname) {
//              this.firstname = firstname
//              this.lastname = lastname;
//          }
//      } 
//      const odysseus = new Odysseus('Odysseus', 'Nobody')
//      console.log(`My name is ${odysseus.lastname}.`)
//      res.send(`My name is ${odysseus.lastname}.`)
//      var params = req.params
//      console.log(`My answer is ${params.id}.`)
//      res.send()
//  })

// app.put('/name', (req, res) => {
//     console.log(`Mon nom est ${req.body.name}.`)
//     res.send(`Mon nom est ${req.body.name}.`)
// })

const mySqlUtilities = require('./utilities/mySqlUtilities');

app.get('/', (req, res) => {
    console.log('All user /');

    mySqlUtilities.getUsers((result, error) => {
        if(!error) {
            res.send(result)
        } else {
            res.status(500).send(error)
        }
    })
})
//Démarrage de l'app : écrire "node ./API/app.js" dans la console
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})