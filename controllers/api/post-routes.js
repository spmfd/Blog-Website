const router = require('express').Router();
const {  User, Post, Comment } = require ('../../models');


// Create an individual post
router.post('/', async (req, res) =>{
    try {
        const blogData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Find a post by its ID

router.get(':id', async (req, res) =>{
    try {
        if(!loggedIn) {
            res.redirect('/login')
        }
    }

    const specificPost = 
})