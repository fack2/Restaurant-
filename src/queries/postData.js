// const dbConnection = require('../database/db_connection')

// const postUser = (result, cb) => {
//     dbConnection.query(`INSERT INTO users (name,location) VALUES ($1,$2)`, [result.name, result.location], (err, res) => {
//         console.log(result.name, result.location)
//         if (err) {
//             return cb(err);
//         }
//         cb(null, res.rows)
//     })
// }
// module.exports = postUser;
