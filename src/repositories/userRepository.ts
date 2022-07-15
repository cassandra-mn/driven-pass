import {prisma} from '../config/database.js';
import {CreateUserData} from '../utils/createUserData.js';

export async function findByEmail(email: string) {
    const user = await prisma.user.findUnique({where: {email}});
    return user;
}

export async function insert(user: CreateUserData) {
    await prisma.user.create({data: user});
}