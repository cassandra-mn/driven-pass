import Joi from 'joi';
import {NoteData} from '../utils/noteData.js';

export const noteSchema = Joi.object<NoteData>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
});