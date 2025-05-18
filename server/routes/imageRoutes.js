import express from 'express';
import generateImage from '../controllers/imageController.js'; // ✅ fixed
import userAuth from '../middlewares/auth.js';

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth, generateImage);

export default imageRouter;
