import {Router} from 'express';

import {create, find, findById, deleteById} from '../controllers/wifiController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {wifiSchema} from '../schemas/wifiSchema.js';

const wifiRouter = Router();

wifiRouter.post('/wifi/create', validateSchemaMiddleware(wifiSchema), create);
wifiRouter.get('/wifi', find);
wifiRouter.get('/wifi/:id', findById);
wifiRouter.post('/wifi/delete/:id', deleteById);

export default wifiRouter;