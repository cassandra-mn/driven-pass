import Joi from 'joi';
import {CardData} from '../utils/cardData.js';

export const CardSchema = Joi.object<CardData>({
    number: Joi.string().min(13).max(16).required(),
    name: Joi.string().required(),
    cvc: Joi.string().length(3).required(),
    expirationDate: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string().valid('credit', 'debit', 'both').required(),
    title: Joi.string().required()
});