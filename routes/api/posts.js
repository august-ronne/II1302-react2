/**
 * Routes for Posts
 */

const express = require("express");
const router = express.Router();

/**
 * Bring in Post model
 */
const Post = require("../../models/Post");

/**
 * @route GET api/posts
 * @desc Get all posts
 * @access
 */
router.get("/", (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .limit(10)
        .then(posts => res.json(posts));
});

/**
 * @route GET api/posts/current
 * @desc Get the most recent post
 * @access
 */
router.get("/current", (req, res) => {
    Post.findOne()
        .sort({ date: -1 })
        .limit(1)
        .then(post => res.json(post));
});

/**
 * @route POST api/posts
 * @desc Create a post
 * @access
 */
router.post("/", (req, res) => {
    const newPost = new Post({
        body: req.body.body
    });
    newPost.save().then(post => res.json(post));
});

/**
 * @route UPDATE api/posts/:id
 * @desc Update post date
 * @access
 */
router.put("/:id", (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, { date: Date.now() })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
