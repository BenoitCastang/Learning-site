var mysql = require('mysql');

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
}

module.exports = new MySqlUtilities()


