const insertUser = 'INSERT INTO users(username, emailaddress) VALUES($1, $2)'
// const getUser = 'SELECT username, emailaddress FROM users WHERE emailaddress=$1'
const getUser = `SELECT username, emailaddress FROM users WHERE emailaddress=$1`
const getAllUsers = `SELECT * FROM users;`

module.exports = { insertUser, getUser, getAllUsers }