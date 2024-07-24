const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'email');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'email');
        if (!post) return res.status(404).json({ msg: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new Post({
            title,
            content,
            author: req.user.id
        });
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updatePost = async (req, res) => {
    const { title, content } = req.body;
    try {
        let post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post not found' });

        if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        post.title = title;
        post.content = content;
        await post.save();

        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post not found' });

        if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await post.remove();
        res.json({ msg: 'Post removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
