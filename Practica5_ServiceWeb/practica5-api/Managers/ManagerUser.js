class ManagerUser {

    constructor() 
    {
        this._DB = new ManagerDB();
    }

    isData(isUser) 
    {
        var user = this.getData(isUser);
        return user.Email == isUser.Email;
    }

    getData(user) 
    {
        var connection = this._DB.Connection;

        connection.query("SELECT * FROM users WHERE id_user=?", [user.Email], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                console.log(results);
            }
        });
    }

    setData(newUser) 
    {

    }
}

module.exports = ManagerUser;
