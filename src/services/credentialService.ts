import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CredentialData} from '../utils/credentialData.js';
import * as credentialRepository from '../repositories/credentialResitory.js';

export async function create(credential: CredentialData) {
    const password = cryptr.encrypt(credential.password);
    console.log({...credential, password});
    //await credentialRepository.insert(credential);
}