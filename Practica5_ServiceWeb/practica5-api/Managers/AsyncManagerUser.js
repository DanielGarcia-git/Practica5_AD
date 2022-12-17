const Promise = require('promise')
const state = require('../Models/State');
class AsyncManagerUser {

    constructor() 
    {
        
    }

    getData(user, connection)
    {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT * FROM users WHERE id_user=?", [user.Email], function(error, results, fields) {
                if (error) return reject(error);
                if (results.length > 0) {
                    return resolve(results[0]);
                }
                else {
                    return resolve(null);
                }
            });
        });
    }

    setData(user, connection) 
    {
        return new Promise(function(resolve, reject) {
            connection.query("INSERT INTO users (id_user, password, name) VALUES(?, ?, ?)", [user.Email, user.Password, user.Name], function(error, results, fields) {
                if (error) reject(error);
                console.log("1 record inserted");
                return resolve();
            });
        });
    }
}

module.exports = AsyncManagerUser;