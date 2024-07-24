const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    const { content, postId } = req.body;
    try {
        const comment = new Comment({
            content,
            post: postId,
            author: req.user.id
        });
        await comment.save();
        res.json(comment);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateComment = async (req, res) => {
    const { content } = req.body;
    try {
        let comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ msg: 'Comment not found' });

        if (comment.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        comment.content = content;
        await comment.save();

        res.json(comment);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ msg: 'Comment not found' });

        if (comment.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await comment.remove();
        res.json({ msg: 'Comment removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
