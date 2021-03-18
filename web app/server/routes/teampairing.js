import express from 'express';
import { getGroups } from '../controllers/teampairing.js';
const router = express.Router();

router.get('/teampairing', getGroups);

export default router;