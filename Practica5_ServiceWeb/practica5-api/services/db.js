const MySQL = require('mysql2/promise');
const Config =  require('../Config/Configuracion');

async function query(sql, params) 
{
    const connection = await MySQL.createConnection(Config.DATABASE_CREDENTIALS);
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}