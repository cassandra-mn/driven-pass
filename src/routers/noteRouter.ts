import {Router} from 'express';

import {create, find, findById, deleteById} from '../controllers/noteController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {noteSchema} from '../schemas/noteSchema.js';

const noteRouter = Router();

noteRouter.post('/notes/create', validateSchemaMiddleware(noteSchema), create);
noteRouter.get('/notes', find);
noteRouter.get('/notes/:id', findById);
noteRouter.post('/notes/delete/:id', deleteById);

export default noteRouter;