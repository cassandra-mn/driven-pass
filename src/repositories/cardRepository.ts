import {prisma} from '../config/database.js';
import {CardData} from '../utils/cardData.js';

export async function create(card: CardData) {
    await prisma.card.create({data: card});     
}

export async function findByIdAndTitle(userId: number, title: string) {
    const card = await prisma.card.findFirst({where: {userId, title}});     
    return card;
}