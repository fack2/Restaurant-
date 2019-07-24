const dbConnection = require('../database/db_connection');

const getData = (type, cb) => {
    dbConnection.query(`select res_name from restaurant where cuisine = $1`, [type], (err, res) => {
        if (err) {
            return cb(err);
        }
        cb(null, res.rows);
    });
};




module.exports = getData