var oracledb = require('oracledb');
var dbConfig = require('../config/dbconfig.js');
var query = require('./query.js');

async function executeSql(sql) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        //const sql ="select level ordem,'nome' pessoa,'aaaa' algo from dual connect by level <=3";
        let result;
        result = await connection.execute(sql);
             
        return result
    } catch (err) {
        console.error(err);
    } finally {
      if (connection) {
        try {
        // Connections should always be released whgiten not needed
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
}

//executeSql(query.command).then(function(data){console.log(data)});
module.exports = { executeSql }