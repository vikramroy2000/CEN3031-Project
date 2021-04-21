import express from 'express';
import { getGroups } from '../controllers/teampairing.js';
import { createStudent } from '../controllers/student.js';
const router = express.Router();

router.get('/teampairing', getGroups);
router.post('/teampairing/survey', createStudent);

export default router;