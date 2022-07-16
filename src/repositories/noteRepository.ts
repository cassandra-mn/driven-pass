import {prisma} from '../config/database.js';
import {NoteData} from '../utils/noteData.js';

export async function create(note: NoteData) {
    await prisma.note.create({data: note});
}

export async function find(userId: number) {
    const note = await prisma.note.findMany({where: {userId}});
    return note;
}

export async function findById(id: number, userId: number) {
    const note = await prisma.note.findFirst({where: {id, userId}});
    return note;
}

export async function findByIdAndTitle(userId: number, title: string) {
    const note = await prisma.note.findFirst({where: {title, userId}});
    return note;
}