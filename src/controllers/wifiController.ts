import {Request, Response} from 'express';

import {WifiData} from '../utils/wifiData.js';
import * as wifiService from '../services/wifiService.js';

export async function create(req: Request, res: Response) {
    const wifi: WifiData = req.body;
    const {userId} = res.locals;
    await wifiService.create({...wifi, userId});
    res.sendStatus(201);
}

export async function find(req: Request, res: Response) {
    const {userId} = res.locals;
    const wifi = await wifiService.find(userId);
    res.status(200).send(wifi);
}

export async function findById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    const wifi = await wifiService.findById(parseInt(id), userId);
    res.status(200).send(wifi);
}

export async function deleteById(req: Request, res: Response) {

    res.sendStatus(501);
}