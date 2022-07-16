import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret');

import {CardData} from '../utils/cardData.js';
import * as cardRepository from '../repositories/cardRepository.js';

export async function create(card: CardData) {
    const cvc = cryptr.encrypt(card.cvc);
    const password = cryptr.encrypt(card.password);
    
    const existCard = await cardRepository.findByIdAndTitle(card.userId, card.title);
    if (existCard) throw {type: "conflict", message: "title already used"};

    await cardRepository.create({...card, cvc, password});
}