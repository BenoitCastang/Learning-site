var mysql = require('mysql')

const config = {
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'classe'
};

class MySqlUtilities {
    getUsers(callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * from personnes', (error, results) => {
            callback(results, error)
        })
        connection.end()
    }
    addUsers(callback, user) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('INSERT INTO personnes VALUES (NULL,??)', (error, results) => {
            callback(results, error)
        })
        connection.end()
    }
    getOneUser(callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('SELECT * FROM personnes where nom = "Mitsuda"', (error, results) => {
            callback(results, error)
        })
    }
    deleteOneUser(callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('DELETE FROM personnes where nom = "Hisaishi"', (error, results) => {
            callback(results, error)
        })
    }
    modifyOneUser(callback) {
        var connection = mysql.createConnection(config)
        connection.connect()
        connection.query('UPDATE personnes SET nom = "Hisaishi", prenom = "Joe" WHERE id = 17', (error, results) => {
            callback(results, error)
        })
    }
}

module.exports = new MySqlUtilities()



