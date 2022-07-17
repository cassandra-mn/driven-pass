import {DocsData} from '../utils/docsData.js';
import {verifyDocs} from '../utils/docsUtils.js';
import * as docsRepository from '../repositories/docsRepository.js';

export async function create(docs: DocsData) {
    await docsRepository.create(docs);
}

export async function find(userId: number) {
    const docs = await docsRepository.find(userId);
    return docs;
}

export async function findById(id: number, userId: number) {
    const docs = await verifyDocs(id, userId);
    return docs;
}

export async function deleteById(id: number, userId: number) {
    await verifyDocs(id, userId);
    await docsRepository.deleteById(id, userId);
}