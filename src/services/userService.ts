import jwt from 'jsonwebtoken';

import {UserData} from '../utils/userData.js';
import * as userUtils from '../utils/userUtils.js';
import * as userRepository from '../repositories/userRepository.js';

export async function create(userData: UserData) {
    const {email, password} = userData;
    
    await userUtils.validateUserExistence(email);
    const passwordEncrypted = userUtils.encryptPassword(password);
    
    await userRepository.insert({email, password: passwordEncrypted});
}

export async function login(userData: UserData) {
    const user = await userUtils.validateCredentials(userData);
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1d"});

    await userRepository.newSession(user.id, token);
    return token;
}