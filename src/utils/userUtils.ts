import bcrypt from 'bcrypt';

import {UserData} from './userData.js';
import * as userRepository from '../repositories/userRepository.js';

export async function validateUserExistence(email: string) {
    const user = await userRepository.findByEmail(email);
    if (user) throw {type: "conflict", message: "email already registered"};
}

export function encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

export async function validateCredentials(userData: UserData) {
    const {email, password} = userData;

    const user = await userRepository.findByEmail(email);
    if (!user) throw {type: "not_found", message: "user not found"};

    const isCorretPassword = bcrypt.compareSync(password, user.password)
    if (!isCorretPassword) throw {type: "unauthorized", message: "incorret username or password"};

    return user;
}