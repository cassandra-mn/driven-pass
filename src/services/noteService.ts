import {NoteData} from '../utils/noteData.js';
import {verifyNote} from '../utils/noteUtils.js';
import * as noteRepository from '../repositories/noteRepository.js';

export async function create(noteData: NoteData) {
    const note = await noteRepository.findByIdAndTitle(noteData.userId, noteData.title);
    if (note) throw {type: "conflict", message: "title already used"};
    
    await noteRepository.create(noteData);  
}

export async function find(userId: number) {
    const notes = noteRepository.find(userId);
    return notes;
}

export async function findById(id: number, userId: number) {
    const note = await verifyNote(id, userId);
    return note;
} 

export async function deleteById(id: number, userId: number) {
    await verifyNote(id, userId);
    await noteRepository.deleteById(id, userId);
}