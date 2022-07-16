import {Request, Response} from 'express';

import {NoteData} from '../utils/noteData.js';
import * as noteService from '../services/noteService.js';

export async function create(req: Request, res: Response) {
    const {title, note}: NoteData = req.body;
    const {userId} = res.locals;
    await noteService.create({title, note, userId});
    res.sendStatus(201);
}

export async function find(req: Request, res: Response) {
    const {userId} = res.locals;
    const notes = await noteService.find(userId);
    res.status(200).send(notes);
}

export async function findById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    const note = await noteService.findById(parseInt(id), userId);
    res.status(200).send(note);
}

export async function deleteById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    await noteService.deleteById(parseInt(id), userId);
    res.sendStatus(200);
}