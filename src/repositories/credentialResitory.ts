import {prisma} from '../config/database.js';
import {CredentialData} from '../utils/credentialData.js';

export async function insert(credential: CredentialData) {
    await prisma.credential.create({data: credential});
}