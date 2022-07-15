import {Request, Response} from 'express';

import {CredentialData} from '../utils/credentialData.js';
import * as credentialService from '../services/credentialService.js';

export async function create(req: Request, res: Response) {
    const credential: CredentialData = req.body;
    await credentialService.create(credential);
    res.sendStatus(201);
}