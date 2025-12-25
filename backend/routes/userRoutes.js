import registeruser from '../controllers/userController.js';
import express from 'express';

const router = express.Router();
router.post('/register',registeruser)


export default router;