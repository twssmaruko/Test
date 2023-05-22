const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");

// const corsOptions = {
//   origin: "http://127.0.0.1:5500",
// };




//app.use(cors(corsOptions));

const usersDB = require('./users/queries')
const iamDB = require('./iam/queries')
const friendsDB = require('./friends/queries')
const port = 3001


app.use(cors())
app.use(express.json())

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )


app.post("/register", (req, res, next) => {
    console.log("Register Body : " , req.body);
    db.createUser(req, res);
   });

app.post("/login", (req, res, next) => {
    console.log("Login Body : " , req.body);
    db.getUserByUserName(req, res);
    // res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// // app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

//USERS

app.get('/users', usersDB.getUsers)
app.get('/users/:id', usersDB.getUserById)
app.post('/user-login', usersDB.loginUser)
app.put('/users/:id', usersDB.updateUser)
app.post('/users', usersDB.createUser)
app.delete('/users/:id', usersDB.deleteUser)

/////
app.get('/iam', iamDB.getIam)

/////


////FRIENDS

app.get('/friends', friendsDB.getFriends)
app.post('/friends', friendsDB.addFriend)


//

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})