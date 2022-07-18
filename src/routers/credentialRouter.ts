import {Router} from 'express';

import {create, deleteById, find, findById} from '../controllers/credentialController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {credentialSchema} from '../schemas/credentialSchema.js';

const credentialsRouter = Router();

credentialsRouter.post('/credentials/create', validateSchemaMiddleware(credentialSchema), create);
credentialsRouter.get('/credentials', find);
credentialsRouter.get('/credentials/:id', findById);
credentialsRouter.delete('/credentials/delete/:id', deleteById);

export default credentialsRouter;