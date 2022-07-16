import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CredentialData} from '../utils/credentialData.js';
import * as credentialRepository from '../repositories/credentialResitory.js';

export async function create(credentialData: CredentialData, userId: number) {
    const password = cryptr.encrypt(credentialData.password);

    const credential = await credentialRepository.findByIdAndTitle(credentialData.userId, credentialData.title);
    if (credential) throw {type: "conflict", message: "title already used"};
    
    await credentialRepository.insert({...credentialData, password, userId});
}

export async function find() {
    const credentials = await credentialRepository.find();
    return credentials;
}

export async function findById(id: number) {
    const credential = await credentialRepository.findById(id);
    if(!credential) throw {type: "not_found", message: "credential not found"};
    return credential;
}