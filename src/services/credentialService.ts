import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CredentialData} from '../utils/credentialData.js';
import * as credentialRepository from '../repositories/credentialResitory.js';

export async function create(credentialData: CredentialData) {
    const password = cryptr.encrypt(credentialData.password);

    const credential = await credentialRepository.findByIdAndTitle(credentialData.userId, credentialData.title);
    if (credential) throw {type: "conflict", message: "title already used"};
    
    await credentialRepository.insert({...credentialData, password});
}