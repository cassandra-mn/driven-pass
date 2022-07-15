import {Request, Response} from 'express';

import {UserData} from '../utils/userData.js';
import * as userService from '../services/userService.js';

export async function signUp(req: Request, res: Response) {
    const user: UserData = req.body;
    
    await userService.create(user);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user: UserData = req.body;
    if (!user.email || !user.password) throw {type: "unprocessable_entity", message: "required fields"};
    
    const token = await userService.login(user);
    res.status(200).send(token);
}