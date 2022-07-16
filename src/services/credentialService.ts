import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CredentialData} from '../utils/credentialData.js';
import * as credentialRepository from '../repositories/credentialResitory.js';
import * as credentialUtils from '../utils/credentialUtils.js';

export async function create(credentialData: CredentialData, userId: number) {
    const password = cryptr.encrypt(credentialData.password);

    const credential = await credentialRepository.findByIdAndTitle(credentialData.userId, credentialData.title);
    if (credential) throw {type: "conflict", message: "title already used"};
    
    await credentialRepository.insert({...credentialData, password, userId});
}

export async function find(userId: number) {
    const credentials = await credentialRepository.find(userId);
    const decryptedCredentials = credentials.map(credential => {
        return credentialUtils.decryptedPassword(credential);
    });
    return decryptedCredentials;
}

export async function findById(id: number, userId: number) {
    const credential = await credentialUtils.verifyCredential(id, userId);
    return credentialUtils.decryptedPassword(credential);
}

export async function deleteById(id: number, userId: number) {
    await credentialUtils.verifyCredential(id, userId);
    await credentialRepository.deleteById(id, userId);
}