const pool = require('../db')

const getFriends = async (req, res) => {
    try {
        const allFriends = await pool.query('SELECT * FROM friends;');
        res.json(allFriends.rows);
    } catch (err) {
        console.error(err.message)
    }
}

const addFriend = async (req, res) => {
    try {
        const {user_id, friend_id} = req.body
        const friendAdded = await pool.query('INSERT INTO friends (friend_one, friend_two) VALUES ($1, $2)', [user_id, friend_id])
        res.json('Friend Request sent')
        
    } catch (err) {

        console.error(err.message)
        
    }
}

const acceptFriend = async (req, res) => {
    try {
        const {user_id, friend_id} = req.body
        const friendAccepted = await pool.query('UPDATE friends SET status= "1" WHERE (friend_one=$1 OR friend_two=$1) AND (friend_one=$2 OR friend_two=$2)', [user_id, friend_id])
        res.json('Friend Request Accepted')
    } catch (err) {

        console.error(err.message)
        
    }
}


module.exports = {
  getFriends,
  addFriend,
  acceptFriend
}