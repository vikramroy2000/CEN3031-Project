import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import { getGroups } from '../controllers/teampairing.js';
import { createStudent, getStudents } from '../controllers/student.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/getprojects', getPosts);
router.post('/getprojects', createPost);
router.delete('/getprojects/:id', deletePost);
router.get('/projects/getprojects', getPosts);
router.post('/projects/getprojects', createPost);
router.delete('/projects/getprojects/:id', deletePost);
router.patch('/:id', updatePost);

router.get('/getteampairing', getGroups);

router.get('/teampairing/survey/getstudents', getStudents);
router.post('/teampairing/survey/getstudents', createStudent);



// router.get('/')

export default router;