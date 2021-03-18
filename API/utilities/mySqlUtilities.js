var mysql = require('mysql')

const config = {
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'classe'
};

// Calling class Personnes
const user = require('../classes/classes')
// Call instance via new var trigerring class Person
const user1 = new user(null, 'Jin', 'Kaneda')

class MySqlUtilities {
    getUsers(callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * from personnes', (error, results) => {
            callback(results, error)
        })
        connection.end()
    }
    addUsers(user1, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('INSERT INTO personnes (nom, prenom) VALUES (?, ?)', [user1.nom, user1.prenom], (error, results) => {
            callback(results, error)
        })
        connection.end()
    }
    getOneUser(callback, params) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * FROM personnes WHERE id = (?)', [params], (error, results) => {
            callback(results, error)
        })
    }
    deleteOneUser(callback, user) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('DELETE FROM personnes WHERE id = ?', [19], (error, results) => {
            callback(results, error)
        })
    }
    modifyOneUser(callback, user) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('UPDATE personnes SET nom = ?, prenom = ? WHERE id = 24', [user1.nom, user1.prenom],(error, results) => {
            callback(results, error)
        })
    }
}

module.exports = new MySqlUtilities()



