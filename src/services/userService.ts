import bcrypt from 'bcrypt';

import {CreateUserData} from '../utils/createUserData.js';
import * as userRepository from '../repositories/userRepository.js';

export async function create(createUserData: CreateUserData) {
    const {email, password} = createUserData;
    const user = await userRepository.findByEmail(email);
    if (user) throw {type: "conflict", message: "email already registered"};
    
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    await userRepository.insert({email, password: passwordEncrypted});
}