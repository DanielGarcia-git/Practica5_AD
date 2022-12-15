class Image {

    _IdImage = null;
    _Title = null;
    _Description = null;
    _Keywords = null;
    _Author = null;
    _Creator = null;
    _CreationDate = null;
    _RegisterDate = null;
    _FileName = null;

    constructor(IdImage,
                Title,
                Description,
                Keywords,
                Author,
                Creator,
                CreationDate,
                RegisterDate,
                FileName) 
    {
        this._IdImage = IdImage;
        this._Title = Title;
        this._Description = Description;
        this._Keywords = Keywords;
        this._Author = Author;
        this._Creator = Creator;
        this._CreationDate = CreationDate;
        this._RegisterDate = RegisterDate;
        this._FileName = FileName;
    }

    /* Getters */

    get IdImage() 
    {
        return this._IdImage;
    }

    get Title() 
    {
        return this._Title;
    }

    get Description() 
    {
        return this._Description;
    }

    get Keywords() 
    {
        return this._Keywords;
    }

    get Author() 
    {
        return this._Author;
    }

    get Creator() 
    {
        return this._Creator;
    }

    get CreationDate() 
    {
        return this._CreationDate;
    }

    get RegisterDate() 
    {
        return this._RegisterDate;
    }

    get FileName() 
    {
        return this._FileName;
    }

    /* Setters */

    set IdImage(newIdImage) 
    {
        this._IdImage = newIdImage;
    }

    set Title(newTitle) 
    {
        this._Title = newTitle;
    }

    set Description(newDescription) 
    {
        this._Description = newDescription;
    }

    set Keywords(newKeywords) 
    {
        this._Keywords = newKeywords;
    }

    set Author(newAuthor) 
    {
        this._Author = newAuthor;
    }

    set Creator(newCreator) 
    {
        this._Creator = newCreator;
    }

    set CreationDate(newCreationDate) 
    {
        this._CreationDate = newCreationDate;
    }

    set RegisterDate(newRegisterDate) 
    {
        this._RegisterDate = newRegisterDate;
    }

    set FileName(newFileName) 
    {
        this._FileName = newFileName;
    }
}

module.exports = Image;