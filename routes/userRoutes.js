const router = require('express').Router();
const jwt = require('jsonwebtoken')

const Users = require('../data/dbHelpers');
const secret = require('../secrets').jwtSecret;

router.post('/register', async (req, res) => {
    const {username, password, } = req.body;

    if(username && password){
        try {
            const [id] = await Users.addUser(req.body);
            if(id){
                res.status(201).json('successfully registered');
            }
        } catch (error) {
            res.status(500).json('server error');
        }
        
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    if(username && password){
        const auth = await Users.authenticate({username, password});
        if(auth.isValid){
            const token = generateToken(auth.user);

            res.status(200).json({
                message: `Hello ${auth.user.username}`,
                token
            });
        }else{
            res.status(500).json('server error')
        }
    }
});

const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    };
    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router