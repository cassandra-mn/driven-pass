import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {CardData} from './cardData.js';
import {findById} from '../repositories/cardRepository.js';

export async function verifyCard(id: number, userId: number) {
    const card = await findById(id, userId);
    if (!card) throw {type: "not_found", message: "card not found"};
    return card;
}

export function decryptedPasswordAndCvc(card: CardData) {
    const password = cryptr.decrypt(card.password);
    const cvc = cryptr.decrypt(card.cvc);
    return {...card, password, cvc};
}