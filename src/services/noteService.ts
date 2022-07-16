import {NoteData} from '../utils/noteData.js';
import * as noteRepository from '../repositories/noteRepository.js';

export async function create(noteData: NoteData) {
    const note = await noteRepository.findByIdAndTitle(noteData.userId, noteData.title);
    if (note) throw {type: "conflict", message: "title already used"};
    
    await noteRepository.create(note);  
}