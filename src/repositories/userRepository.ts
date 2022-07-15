import {prisma} from '../config/database.js';
import {UserData} from '../utils/userData.js';

export async function findByEmail(email: string) {
    const user = await prisma.user.findUnique({where: {email}});
    return user;
}

export async function insert(user: UserData) {
    await prisma.user.create({data: user});
}

export async function newSession(userId: number, token: string) {
    await prisma.session.create({data: {userId, token}});
}