import {Request, Response} from 'express';

import {CardData} from '../utils/cardData.js';
import * as cardService from '../services/cardService.js';

export async function create(req: Request, res: Response) {
    const card: CardData = req.body;
    const {userId} = res.locals;
    await cardService.create({...card, userId});
    res.sendStatus(201);
}

export async function find(req: Request, res: Response) {
    const {userId} = res.locals;
    const cards = await cardService.find(userId);
    res.status(200).send(cards);
}

export async function findById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    const card = await cardService.findById(parseInt(id), userId);
    res.status(200).send(card);
}

export async function deleteById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    await cardService.deleteById(parseInt(id), userId);
    res.sendStatus(200);
}