const Pool = require('pg').Pool

const pool = new Pool({
  user: 'user1',
  host: 'localhost',
  database: 'friends',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserByUserName = (request, response) => {
  const obj = JSON.stringify(request.body);
  var parsed = JSON.parse(obj);
  var userName = parsed.user_name;
  var password = parsed.password;

  pool.query('SELECT * FROM users WHERE user_name = $1', [userName], (error, results) => {
    if (error) {
      console.error('Error executing query', error.stack)
    }

    const passStored = results.rows[0].password;

    if(password != passStored) {
      console.log("Incorrect Password")
      response.status(401).send("Incorrect Password")
    }
    else {
      console.log("Login Success")
      response.status(200).send("Login Success")
    }
    
  })
}


const createUser = (request, response) => {
  const obj = JSON.stringify(request.body);
  var parsed = JSON.parse(obj);
  var userName = parsed.user_name;
  var password = parsed.password;

  console.log("name: ", userName, " password: ", password)
  pool.query('INSERT INTO users (user_name, password) VALUES ($1, $2)', [userName, password], (error, results) => {
    if (error) {
      return console.error('Error executing query', error.stack)
    }
    response.status(201).send(`User added with ID: ${results.fields}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserByUserName,
  createUser,
  updateUser,
  deleteUser,
}