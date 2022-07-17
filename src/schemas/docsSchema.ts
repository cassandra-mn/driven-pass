import Joi from 'joi';
import {DocsData} from '../utils/docsData.js';

export const docsSchema = Joi.object<DocsData>({
    fullName: Joi.string().required(),
    number: Joi.string().required(),
    type: Joi.string().valid('RG', 'CNH').required(),
    emissionDate: Joi.string().required(),
    validity: Joi.string().required(),
    issuer: Joi.string().required(),
});