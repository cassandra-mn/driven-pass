import Joi from 'joi';
import {WifiData} from '../utils/wifiData.js';

export const wifiSchema = Joi.object<WifiData>({
    name: Joi.string().required(),
    password: Joi.string().required(),
    title: Joi.string().required()
});