const router = require('express').Router();

const Users = require('../data/dbHelpers')

router.post('/register', async (req, res) => {
    const {username, password, } = req.body;

    if(username && password){
        try {
            const [id] = await Users.addUser(req.body);
            console.log(id)
            if(id){
                res.status(201).json('successfully registered')
            }
        } catch (error) {
            console.log(error)
            res.status(500).json('server error')
        }
        
    }
})

module.exports = router