import {prisma} from '../config/database.js';
import {CardData} from '../utils/cardData.js';

export async function create(card: CardData) {
    await prisma.card.create({data: card});     
}

export async function find(userId: number) {
    const cards = await prisma.card.findMany({where: {userId}});     
    return cards;
}

export async function findById(id: number, userId: number) {
    const card = await prisma.card.findFirst({where: {id, userId}});     
    return card;
}

export async function findByIdAndTitle(userId: number, title: string) {
    const card = await prisma.card.findFirst({where: {userId, title}});     
    return card;
}