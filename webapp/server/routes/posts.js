import express from 'express';
import { getPosts, createPost, deletePost, updatePost } from '../controllers/posts.js';
import { getGroups } from '../controllers/teampairing.js';
import { createStudent, getStudents, createGroups } from '../controllers/student.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/getprojects', getPosts);
router.post('/getprojects', createPost);
router.patch('/getprojects/:id', updatePost);
router.delete('/getprojects/:id', deletePost);
router.get('/projects/getprojects', getPosts);
router.post('/projects/getprojects', createPost);
router.patch('/projects/getprojects/:id', updatePost);
router.delete('/projects/getprojects/:id', deletePost);

router.get('/getteampairing', getGroups);
router.post('/getteampairing', createGroups);

router.get('/teampairing/survey/getstudents', getStudents);
router.post('/teampairing/survey/getstudents', createStudent);



export default router;