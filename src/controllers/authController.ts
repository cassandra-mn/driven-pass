import {Request, Response} from 'express';

import {CreateUserData} from '../utils/createUserData.js';
import * as userService from '../services/userService.js';

export async function signUp(req: Request, res: Response) {
    const user: CreateUserData = req.body;
    if (!user.email || !user.password) throw {type: "unprocessable_entity"};

    await userService.create(user);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    res.sendStatus(501);
}