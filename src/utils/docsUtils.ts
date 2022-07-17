import {findById} from '../repositories/docsRepository.js';

export async function verifyDocs(id: number, userId: number) {
    const docs = await findById(id, userId);
    if (!docs) throw {type: "not_found", message: "wifi not found"};
    return docs;
}