
function buildUser(Email, Password, Name) 
{
    return {'email': Email, 'password': Password, 'name': Name};
}

module.exports = {
    buildUser
};