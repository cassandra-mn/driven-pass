import {NoteData} from '../utils/noteData.js';
import * as noteRepository from '../repositories/noteRepository.js';

export async function create(noteData: NoteData) {
    const note = await noteRepository.findByIdAndTitle(noteData.userId, noteData.title);
    if (note) throw {type: "conflict", message: "title already used"};
    
    await noteRepository.create(noteData);  
}

export async function find(userId: number) {
    const notes = noteRepository.find(userId);
    if (!notes) throw {type: "not_found", message: "notes not found"};
    return notes;
}

export async function findById(id: number, userId: number) {
    const note = await noteRepository.findById(id, userId);
    if (!note) throw {type: "not_found", message: "note not found"};
    return note;
} 