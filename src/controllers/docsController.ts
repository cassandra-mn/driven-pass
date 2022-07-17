import {Request, Response} from 'express';

import {DocsData} from '../utils/docsData.js';
import * as docsService from '../services/docsService.js';

export async function create(req: Request, res: Response) {
    const docs: DocsData = req.body;
    const {userId} = res.locals;
    await docsService.create({...docs, userId});
    res.sendStatus(201);
}

export async function find(req: Request, res: Response) {

    res.sendStatus(501);
}

export async function findById(req: Request, res: Response) {

    res.sendStatus(501);
}

export async function deleteById(req: Request, res: Response) {

    res.sendStatus(501);
}