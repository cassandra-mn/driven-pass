import {Router} from 'express';

import {validateToken} from '../middlewares/validateToken.js';
import authRouter from './authRouter.js';
import credentialsRouter from './credentialRouter.js';
import noteRouter from './noteRouter.js';
import cardRouter from './cardRouter.js';

const router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(credentialsRouter);
router.use(noteRouter);
router.use(cardRouter);

export default router;