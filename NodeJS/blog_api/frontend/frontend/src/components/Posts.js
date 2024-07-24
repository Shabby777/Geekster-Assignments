// frontend/src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts');
            setPosts(res.data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>Author: {post.author.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
