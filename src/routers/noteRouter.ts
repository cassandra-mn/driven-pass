import {Router} from 'express';

import {create} from '../controllers/noteController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {noteSchema} from '../schemas/noteSchema.js';

const noteRouter = Router();

noteRouter.post('/notes/create', validateSchemaMiddleware(noteSchema), create);

export default noteRouter;