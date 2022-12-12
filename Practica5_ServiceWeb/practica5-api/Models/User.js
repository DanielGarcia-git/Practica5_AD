class User {
    _Email = "";
    _Password = "";
    _Name = "";

    constructor(Email,
                Password,
                Name)
    {
        this._Email = Email;
        this._Password = Password;
        this._Name = Name;
    }

    /* Getters */

    get Email()
    {
        return this._Email;
    }

    get Password()
    {
        return this._Password;
    }

    get Name()
    {
        return this._Name;
    }

    /* Setters */

    set Email(newEmail)
    {
        this._Email = newEmail;
    }

    set Password(newPassword)
    {
        this._Password = newPassword;
    }

    set Name(newName)
    {
        this._Name = newName;
    }
}