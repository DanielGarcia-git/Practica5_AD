const db = require('./db');
const Image = require('../Models/Image');
const { param } = require('../routes/images');

async function getData(image, callback, callbackError) 
{
  const data = await db.query("SELECT * FROM images WHERE id=?", [image.IdImage]);
  if (data.length > 0) {
    const ima = Image.buildImage(data[0].id, 
                                 data[0].title, 
                                 data[0].description, 
                                 data[0].keywords, 
                                 data[0].author, 
                                 data[0].creator, 
                                 data[0].capture_date, 
                                 data[0].storage_date, 
                                 data[0].filename);
    callback(ima);
  } else callbackError(data)
}

async function getAllData(callback, callbackError) 
{
  const data = await db.query("SELECT * FROM images");
  if (data.length > 0) {
    var images = [];
    for(key in data) {
      const ima = Image.buildImage(data[key].id, 
                                   data[key].title, 
                                   data[key].description, 
                                   data[key].keywords, 
                                   data[key].author, 
                                   data[key].creator, 
                                   data[key].capture_date, 
                                   data[key].storage_date, 
                                   data[key].filename);
      images.push(ima);
    }
    callback(images);
  } else callback([]);
}

async function getDataAdvance(image, callback, callbackError) 
{
  var sql = "SELECT * FROM images WHERE ";
  var params = [];
  if (image.Title != '') {
    sql = sql + 'title = ?';
    params.push(image.Title);
  }
  if (image.Author != '') {
    sql = sql + 'author = ?';
    params.push(image.Author);
  }
  if (image.Keywords != '') {
    sql = sql + 'keywords = ?';
    params.push(image.Keywords);
  }
  if (image.RegisterDate != '') {
    sql = sql + 'storage_date = ?';
    params.push(image.RegisterDate);
  }
  const data = await db.query(sql, params);
  if (data.length > 0) {
    var images = [];
    for(key in data) {
      const ima = Image.buildImage(data[key].id, 
                                   data[key].title, 
                                   data[key].description, 
                                   data[key].keywords, 
                                   data[key].author, 
                                   data[key].creator, 
                                   data[key].capture_date, 
                                   data[key].storage_date, 
                                   data[key].filename);
      images.push(ima);
    }
    callback(images);
  } else callbackError(data);
}

async function getNextId(callback, callbackError) 
{
  const data = await db.query("SELECT * FROM images WHERE ID = (SELECT MAX(ID) FROM images)");
  if (data.length > 0) callback(data[0].id + 1);
  else callbackError();
}

async function setData(newImage, callback, callbackError) 
{
  const param = [newImage.Title, 
                 newImage.Description, 
                 newImage.Keywords, 
                 newImage.Author, 
                 newImage.Creator, 
                 newImage.CreationDate, 
                 newImage.RegisterDate, 
                 newImage.FileName];
  const result = await db.query("INSERT INTO images (title, description, keywords, author, creator, capture_date, storage_date, filename) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", param);
  if (result.affectedRows) {
    const data = await db.query("SELECT * FROM images WHERE ID = (SELECT MAX(ID) FROM images)");
    const image = Image.buildImage(data[0].id, 
                                 data[0].title, 
                                 data[0].description, 
                                 data[0].keywords, 
                                 data[0].author, 
                                 data[0].creator, 
                                 data[0].capture_date, 
                                 data[0].storage_date, 
                                 data[0].filename);
    callback(image);
  }
  else callbackError();
}

async function updateData(updateImage, callback, callbackError) 
{
  const param = [updateImage.Title, 
                 updateImage.Description, 
                 updateImage.Keywords, 
                 updateImage.Author, 
                 updateImage.Creator, 
                 updateImage.RegisterDate, 
                 updateImage.IdImage];
  const result = await db.query("UPDATE images SET title = ?, description = ?, keywords = ?, author = ?, creator = ?, storage_date = ? WHERE id = ?", param);
  if (result.affectedRows) {
    const data = await db.query("SELECT * FROM images WHERE id=?", [updateImage.IdImage]);
    if (data.length > 0) {
      const image = Image.buildImage(data[0].id, 
                                     data[0].title, 
                                     data[0].description, 
                                     data[0].keywords, 
                                     data[0].author, 
                                     data[0].creator, 
                                     data[0].capture_date, 
                                     data[0].storage_date, 
                                     data[0].filename);
      callback(image);
    }
    else callback(data);
  }
  else callbackError(result);
}

async function deleteData(image, callback, callbackError) 
{
  const data = await db.query("SELECT * FROM images WHERE id=?", [image.IdImage]);
  if (data.length > 0) {
    const deleteImage = Image.buildImage(data[0].id, 
                                         data[0].title, 
                                         data[0].description, 
                                         data[0].keywords, 
                                         data[0].author, 
                                         data[0].creator, 
                                         data[0].capture_date, 
                                         data[0].storage_date, 
                                         data[0].filename);
    const result = await db.query("DELETE FROM images WHERE id = ?", [image.IdImage]);
    if (result.affectedRows) callback(deleteImage);
    else callbackError();
  } else callbackError();
}

module.exports = {
  getData,
  getAllData,
  setData,
  updateData,
  deleteData,
  getNextId,
  getDataAdvance
};