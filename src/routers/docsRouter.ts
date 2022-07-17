import {Router} from 'express';

import {create, find, findById, deleteById} from '../controllers/docsController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {docsSchema} from '../schemas/docsSchema.js';

const docsRouter = Router();

docsRouter.post('/docs/create', validateSchemaMiddleware(docsSchema), create);
docsRouter.get('/docs', find);
docsRouter.get('/docs/:id', findById);
docsRouter.post('/docs/delete/:id', deleteById);

export default docsRouter;