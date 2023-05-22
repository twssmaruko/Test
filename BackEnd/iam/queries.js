const pool = require('../db')

const getIam = async (req, res) => {
    try {
        const iam = await pool.query('SELECT * FROM iam WHERE iam_id = 1');
        res.json(iam.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = {
    getIam
}