const db = require('./db');
const User = require('../Models/User');

async function getData(user, callback, callbackError) 
{
  const data = await db.query("SELECT * FROM users WHERE id_user=?", [user.UserEmail]);
  if (data.length > 0) {
    const u = User.buildUser(data[0].id_user, data[0].password, data[0].name);
    callback(u);
  } else callbackError(data)
}

async function setData(newUser, callback, callbackError)
{
  const result = await db.query("INSERT INTO users (id_user, password, name) VALUES(?, ?, ?)", [newUser.UserEmail, newUser.UserPassword, newUser.UserName]);
  if (result.affectedRows) callback(newUser);
  else callbackError();
}

async function isData(isUser, callback, callbackError)
{
  const data = await db.query("SELECT * FROM users WHERE id_user=?", [isUser.UserEmail]);
  if (data.length > 0) callback();
  else callbackError()
}

module.exports = {
  getData,
  setData,
  isData
}