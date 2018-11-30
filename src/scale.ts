import { NotesEnum, Note } from "./notes"

function getRawScale(formula: number[], note: Note): Note[] {
    const notes = Object.keys(NotesEnum);
    if (notes.indexOf(note) === -1) throw new Error(`Wrong note: ${note}`);

    const scale: Note[] = [];
    scale.push(note);

    formula.forEach(val => {
        const prevNotePosition = notes.indexOf(scale[scale.length - 1]);
        const newNote = notes[(prevNotePosition + val) % notes.length] as Note;
        scale.push(newNote);
    });

    return scale;
}

export function getMajorRawScale(note: Note): Note[] {
    const formula = [2, 2, 1, 2, 2, 2, 1];

    return getRawScale(formula, note);
}

export function getMinorRawScale(note: Note): Note[] {
    const formula = [2, 1, 2, 2, 1, 2, 2];

    return getRawScale(formula, note);
}
