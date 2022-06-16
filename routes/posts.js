const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// ROUTES

// GETS ALL POSTS
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

//SUBMITS A POST
router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		desc: req.body.desc,
	});
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// GET SPECIFIC POST
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.json({ message: error });
	}
});

// DELETE A POST
router.delete('/:id', async (req, res) => {
	try {
		const removedPost = await Post.deleteOne({ _id: req.params.id });
		res.json(removedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// UPDATE A POST
router.patch('/:id', async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					title: req.body.title,
					desc: req.body.desc,
				},
			}
		);
		res.json(updatedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
