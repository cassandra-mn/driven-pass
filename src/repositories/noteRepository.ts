import {prisma} from '../config/database.js';
import {NoteData} from '../utils/noteData.js';

export async function create(note: NoteData) {
    await prisma.note.create({data: note});
}

export async function findByIdAndTitle(userId: number, title: string) {
    const note = await prisma.note.findFirst({where: {title, userId}});
    return note;
}