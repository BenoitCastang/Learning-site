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
    // ------------------------------------
    // BODY REQUESTS
    //-------------------------------------
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
    getOneUserById(user1, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * FROM personnes WHERE id = (?)', [user1.id], (error, results) => {
            callback(results, error)
        })
    }
    deleteOneUserById(user1, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('DELETE FROM personnes WHERE id = (?)', [user1.id], (error, results) => {
            callback(results, error)
        })
    }
    modifyOneUserById(user1, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('UPDATE personnes SET nom = (?), prenom = (?) WHERE id = (?)', [user1.nom, user1.prenom, user1.id],(error, results) => {
            callback(results, error)
        })
    }
    // ------------------------------------
    // LINK REQUESTS
    //-------------------------------------
    getOneUserByIdLink(params, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * FROM personnes WHERE id = (?)', [params.id], (error, results) => {
            callback(results, error)
        })
    }
    deleteOneUserByIdLink(params, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('DELETE FROM personnes WHERE id = (?)', [params.id], (error, results) => {
            callback(results, error)
        })
    }
    modifyOneUserByIdLink(user1, callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('UPDATE personnes SET nom = (?), prenom = (?) WHERE id = (?)', [user1.nom, user1.prenom, user1.id],(error, results) => {
            callback(results, error)
        })
    }
}

module.exports = new MySqlUtilities()



