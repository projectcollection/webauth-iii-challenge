const bcrypt = require('bcryptjs');

const db = require('./knexConfig');

const users = 'users';

const addUser = (user) => {
    return db(users).insert({...user, password: bcrypt.hashSync(user.password, 4)});
}

const authenticate = (creds) => {
    return db(users).where({username: creds.username}).first().then(user => {
        return {
            isValid: bcrypt.compareSync(creds.password, user.password),
            user
        }
    });
}

const getUserBy = (filter) => {
    return db(users).where(filter).first();
}

const getUsers = () => {
    return db(users);
}

module.exports = {
    addUser,
    authenticate,
    getUserBy,
    getUsers
}