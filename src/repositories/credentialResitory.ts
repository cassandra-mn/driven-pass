import {prisma} from '../config/database.js';
import {CredentialData} from '../utils/credentialData.js';

export async function insert(credential: CredentialData) {
    await prisma.credential.create({data: credential});
}

export async function find() {
    const credentials = await prisma.credential.findMany();
    return credentials;
}

export async function findByIdAndTitle(userId: number, title: string) {
    const credential = await prisma.credential.findFirst({where: {title, userId}});
    return credential;
}