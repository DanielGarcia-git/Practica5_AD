
function buildUser(Email, Password, Name) 
{
    return {'UserEmail': Email, 'UserPassword': Password, 'UserName': Name};
}

module.exports = {
    buildUser
};