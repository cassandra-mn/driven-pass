import {Request, Response} from 'express';

import {NoteData} from '../utils/noteData.js';
import * as noteService from '../services/noteService.js';

export async function create(req: Request, res: Response) {
    const {title, note}: NoteData = req.body;
    const {id: userId} = res.locals;
    await noteService.create({title, note, userId});
    res.sendStatus(201);
}