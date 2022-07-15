import {Router} from 'express';

import {create} from '../controllers/credentialController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {credentialSchema} from '../schemas/credentialSchema.js';

const credentialsRouter = Router();

credentialsRouter.post('/credentials/create', validateSchemaMiddleware(credentialSchema), create);

export default credentialsRouter;