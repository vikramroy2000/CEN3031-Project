import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.get('/projects', getPosts);
router.post('/projects', createPost);
router.patch('/:id', updatePost);


// router.get('/')

export default router;