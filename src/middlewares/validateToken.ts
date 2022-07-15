import {Request, Response, NextFunction} from 'express';
import {findSession} from '../repositories/userRepository.js';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    
    const isValid = await findSession(token);
    if (!authorization || !isValid) return res.status(401).send("token is not valid");
    
    res.locals.id = isValid.userId;
    next();
}