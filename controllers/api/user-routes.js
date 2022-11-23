const router = require('express').Router();
const {  User } = require ('../../models');

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ 
            where: {username: req.body.username}
        })

        if (!userData) {
            return res.status(400).json('Invalid Username')
        }

        const userPw = await userData.checkPassword(req.body.password)

        if(!userPw) {
            return res.status(400).json('Invalid password')
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.status(200).json('You are logged in!')
        })

    } catch(error) {
        res.status(500).json(error)
    }
});


router.post('/logout', (req, res) => {
    if (req.session.LoggedIn) {
        req.session.destroy(() =>{
            res.status(200).end();
        });
    } else {
        res.status(500).end();
    }
});

module.exports = router