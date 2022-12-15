class ManagerDB {

    _connection = null;

    constructor() 
    {
        var mysql = require('mysql');
        /* Setup connection */
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin'
        });

        connection.connect((err) => {
            if (err) {
                console.log("Error occurred", err);
            } else {
                console.log("Connected to MySQL Server");
                this._connection = connection;
            }
        });

        connection.query("SELECT * FROM users WHERE id_user=?", ["prueba@prueba.com"], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                console.log(results);
            }
        });
    }

    get Connection()
    {
        return this._connection;
    }
}