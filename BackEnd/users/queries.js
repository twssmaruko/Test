const pool = require('../db')

const getUsers = async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users;');
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
}

const getUserById = async (req, res) => {
    try{
        const { id } = req.params
        const fetchedUser = await pool.query ('SELECT * FROM users WHERE user_id = $1', [id])
       
        res.json(fetchedUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body
        const fetchedUser = await pool.query('SELECT * FROM users WHERE ((username=$1) OR (email=$1)) AND (password=$2)', [username, password])
        res.json(fetchedUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const createUser = async (req, res) => {
    try {
        const { username, password, first_name, last_name, birthday, email, profile_picture_link } = req.body

        let currentDate = new Date().toJSON()
        const newUser = await pool.query('INSERT INTO users (username, password, first_name, last_name, birthday, email, profile_picture_link, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [username, password, first_name, last_name, birthday, email, profile_picture_link, currentDate])
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, password, first_name, last_name, birthday, email, profile_picture_link } = req.body
        const updatedUser = await pool.query('UPDATE users SET username = $1, password = $2, first_name = $3, last_name = $4, birthday = $5, email = $6, profile_picture_link = $7 WHERE user_id = $8', [username, password, first_name, last_name, birthday, email, profile_picture_link, id])
        res.json("User updated")
    } catch (err) {
        console.error(err.message)
    }
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const deleteUser = await pool.query('DELETE FROM users WHERE user_id = $1', [id])
        res.json("User Deleted");
    } catch(err) {
        console.error(err.message)
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    loginUser
}