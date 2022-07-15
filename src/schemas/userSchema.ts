import Joi from 'joi';
import {UserData} from '../utils/userData.js';

export const userSchema = Joi.object<UserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});