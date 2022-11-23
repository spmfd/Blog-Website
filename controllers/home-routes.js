const router = require('express').Router();
const { Post, User } = require ('../models');


// All posts
router.get('/', async (req, res) =>{
    try {
            // Grabs all the posts
        const postData = await Post.findAll({
            include: [User]
        })
        // Serializes data
        const posts = postData.map(post => post.get({ plain: true }))
        // Renders the response
        res.render('homepage', { posts })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Single post
router.get('/post/:id', async (req, res) =>{
    try{
        specificPost = await Post.findByPk(rewq.params.id, {
            include: [{ model: Post }]
        })
        const locatedPost = specificPost.get({plain: true});
        res.render('post', {locatedPost, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Login Route
router.get('/login', async (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
})

// Signup Route
router.get('/signup', async (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('signup')
})

module.exports = router;