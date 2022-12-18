
function buildImage(IdImage,
                    Title,
                    Description,
                    Keywords,
                    Author,
                    Creator,
                    CreationDate,
                    RegisterDate,
                    FileName)  
{
  return {
    'Author': Author,
    'Creator': Creator,
    'FileName': FileName,
    'RegisterDate': RegisterDate,
    'CreationDate': CreationDate,
    'Keywords': Keywords,
    'Description': Description,
    'Title': Title,
    'IdImage': IdImage
  }
}

module.exports = {
    buildImage
};