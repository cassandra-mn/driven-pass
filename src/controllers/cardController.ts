import {Request, Response} from 'express';

import {CardData} from '../utils/cardData.js';
import * as cardService from '../services/cardService.js';

export async function create(req: Request, res: Response) {
    const card: CardData = req.body;
    const {userId} = res.locals;
    await cardService.create({...card, userId});
    res.sendStatus(201);
}