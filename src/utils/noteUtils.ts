import {findById} from '../repositories/noteRepository.js';

export async function verifyNote(id: number, userId: number) {
    const note = await findById(id, userId);
    if (!note) throw {type: "not_found", message: "note not found"};
    return note;
}