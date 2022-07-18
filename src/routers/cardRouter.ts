import {Router} from 'express';

import {create, find, findById, deleteById} from '../controllers/cardController.js'; 
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {CardSchema} from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post('/cards/create', validateSchemaMiddleware(CardSchema), create);
cardRouter.get('/cards', find);
cardRouter.get('/cards/:id', findById);
cardRouter.delete('/cards/delete/:id', deleteById);

export default cardRouter;