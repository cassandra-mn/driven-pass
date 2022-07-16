import {Router} from 'express';

import {create} from '../controllers/cardController.js'; 
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {CardSchema} from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post('/cards/create', validateSchemaMiddleware(CardSchema), create);

export default cardRouter;