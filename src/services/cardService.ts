import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret');

import {CardData} from '../utils/cardData.js';
import {verifyCard, decryptedPasswordAndCvc} from '../utils/cardUtils.js';
import * as cardRepository from '../repositories/cardRepository.js';

export async function create(card: CardData) {
    const cvc = cryptr.encrypt(card.cvc);
    const password = cryptr.encrypt(card.password);

    const existCard = await cardRepository.findByIdAndTitle(card.userId, card.title);
    if (existCard) throw {type: "conflict", message: "title already used"};

    await cardRepository.create({...card, cvc, password});
}

export async function find(userId: number) {
    const cards = await cardRepository.find(userId);
    const decryptedData = cards.map(card => {
        return decryptedPasswordAndCvc(card);
    });
    return decryptedData;
}

export async function findById(id: number, userId: number) {
    const card = await verifyCard(id, userId);
    const decryptedData = decryptedPasswordAndCvc(card);
    return decryptedData;
}

export async function deleteById(id: number, userId: number) {
    await verifyCard(id, userId);
    await cardRepository.deleteById(id, userId);
}