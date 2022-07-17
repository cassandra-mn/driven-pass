import {prisma} from '../config/database.js';
import {DocsData} from '../utils/docsData.js';

export async function create(docs: DocsData) {
    await prisma.docs.create({data: docs});     
}

export async function find(userId: number) {
    const docs = await prisma.docs.findMany({where: {userId}});     
    return docs;
}

export async function findById(id: number, userId: number) {
    const docs = await prisma.docs.findFirst({where: {id, userId}});     
    return docs;
}

export async function deleteById(id: number, userId: number) {
    await prisma.docs.deleteMany({where: {id, userId}});
}