class ManagerDB {

    _connection = null;

    constructor() {
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
    }
}