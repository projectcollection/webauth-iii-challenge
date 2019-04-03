const jwt = require('jsonwebtoken');

const secret = require('./secrets').jwtSecret;

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json('invalid credentials');
            }else{
                next();
            }
        });
    }else{
        res.status(401).json('no token')
    }
}

module.exports = {
    isLoggedIn
}