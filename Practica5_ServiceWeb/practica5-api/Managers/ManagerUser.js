const User = require('../Models/User');
const AsyncManagerUser = require('./AsyncManagerUser');
var state = require('../Models/State')
var MySQL = require('mysql');

class ManagerUser {

    _connection = null;

    constructor() 
    {
        if (typeof ManagerUser.instance === "object") return ManagerUser.instance;

        ManagerUser.instance = this;
        return this;
    }

    connectDB(user, password, nameDB)
    {
        this._connection = MySQL.createConnection({
            host: 'localhost',
            user: user,
            password: password,
            database: nameDB
        });

        this._connection.connect((err) => {
            if (err) console.log("Error occurred", err);
            else console.log("Connected to MySQL Server (User)");
        });
    }

    isData(isUser) 
    {
        var user = this.getData(isUser);
        console.log(user);
        if (user == null) return false;
        return user.Email === isUser.Email;
    }

    getData(user) 
    {
        var asyncUser = new AsyncManagerUser();
        state.block();
        var promise = asyncUser.getData(user, this._connection)
        while(state.isLoading()) {
            promise.then(function(response) {
                state.setResult(response);
                console.log(state);
            });
        }
        console.log(state);
        var data = state.getResult();
        state.reset();
        return new User(data.id_user, data.password, data.name);;
    }

    setData(newUser) 
    {
        var asyncUser = new AsyncManagerUser();
        asyncUser.setData(newUser, this._connection).then(function(response) {
            res = newUser;
        }, function(error) {
            res = null;
        });
        return res;
    }
}

module.exports = ManagerUser;
