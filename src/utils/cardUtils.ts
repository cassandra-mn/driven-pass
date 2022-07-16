import {findById} from '../repositories/cardRepository.js';

export async function verifyCard(id: number, userId: number) {
    const card = await findById(id, userId);
    if (!card) throw {type: "not_found", message: "card not found"};
    return card;
}