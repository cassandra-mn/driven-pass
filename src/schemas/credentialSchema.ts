import Joi from 'joi';
import {CredentialData} from '../utils/credentialData.js';

export const credentialSchema = Joi.object<CredentialData>({
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    title: Joi.string().required(),
    userId: Joi.number().required()
});