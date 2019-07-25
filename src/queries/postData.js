const dbConnection = require('../database/db_connection');

const postData = (cuisine, res_name, location, phone, delivery, cb) => {
    dbConnection.query(
        'INSERT INTO restaurant (cuisine, res_name, location, phone,delivery) VALUES ($1, $2, $3, $4, $5)', [cuisine, res_name, location, phone, delivery],
        (err, res) => {
            if (err) {
                return cb(err);
            }

            cb(null, res);
        }
    );
};


module.exports = postData;