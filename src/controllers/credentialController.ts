import {Request, Response} from 'express';

import {CredentialData} from '../utils/credentialData.js';
import * as credentialService from '../services/credentialService.js';

export async function create(req: Request, res: Response) {
    const credential: CredentialData = req.body;
    const {userId} = res.locals;
    await credentialService.create(credential, parseInt(userId));
    res.sendStatus(201);
}

export async function find(req: Request, res: Response) {
    const {userId} = res.locals;
    const credentials = await credentialService.find(parseInt(userId));
    res.status(200).send(credentials);
}

export async function findById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    const credential = await credentialService.findById(parseInt(id), parseInt(userId));
    res.status(200).send(credential);
}

export async function deleteById(req: Request, res: Response) {
    const {id} = req.params;
    const {userId} = res.locals;
    await credentialService.deleteById(parseInt(id), parseInt(userId));
    res.sendStatus(200);
}