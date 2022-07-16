import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CredentialData} from './credentialData.js';
import {findById} from '../repositories/credentialResitory.js';

export async function verifyCredential(id: number, userId: number) {
    const credential = await findById(id, userId);
    if(!credential) throw {type: "not_found", message: "credential not found"};
    return credential;
}

export async function decryptedPassword(credential: CredentialData) {
    const password = cryptr.decrypt(credential.password);
    return {...credential, password};
}