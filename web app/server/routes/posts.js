import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import { createStudent, getStudents } from '../controllers/student.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/projects', getPosts);
router.post('/projects', createPost);
router.delete('/projects/:id', deletePost);
router.patch('/:id', updatePost);
router.get('/teampairing/survey', getStudents);
router.post('/teampairing/survey', createStudent);



// router.get('/')

export default router;