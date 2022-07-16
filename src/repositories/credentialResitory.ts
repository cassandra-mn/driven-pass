import {prisma} from '../config/database.js';
import {CredentialData} from '../utils/credentialData.js';

export async function insert(credential: CredentialData) {
    await prisma.credential.create({data: credential});
}

export async function find(userId: number) {
    const credentials = await prisma.credential.findMany({where: {userId}});
    return credentials;
}

export async function findById(id: number, userId: number) {
    const credential = await prisma.credential.findFirst({where: {id, userId}});
    return credential;
}

export async function findByIdAndTitle(userId: number, title: string) {
    const credential = await prisma.credential.findFirst({where: {title, userId}});
    return credential;
}

export async function deleteById(id: number, userId: number) {
    await prisma.credential.deleteMany({where: {id, userId}});
}