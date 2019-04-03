const bcrypt = require('bcryptjs');

const db = require('./knexConfig');

const users = 'users'

const addUser = (user) => {
    return db(users).insert({...user, password: bcrypt.hashSync(user.password, 4)});
}

const authenticate = (creds) => {
    return db(users).where({username: creds.username}).first().then(user => {
        return bcrypt.compareSync(creds.password, user.password);
    })
}

const getUsers = () => {
    return db(users)
}

module.exports = {
    addUser,
    authenticate,
    getUsers
}