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

    res.sendStatus(501);
}

export async function findById(req: Request, res: Response) {

    res.sendStatus(501);
}

export async function deleteById(req: Request, res: Response) {

    res.sendStatus(501);
}