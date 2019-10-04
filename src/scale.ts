import { Note, NotesEnum } from "./notes";

/**
 * @alias new Scale(note, [2, 2, 1, 2, 2, 2, 1]).getRawScale()
 * @param note
 */
export function getMajorRawScale(note: Note): Note[] {
    const formula = [2, 2, 1, 2, 2, 2, 1];
    const scale = new Scale(note, formula);

    return scale.getRawScale();
}

/**
 * @alias new Scale(note, [2, 1, 2, 2, 1, 2, 2]).getRawScale()
 * @param note
 */
export function getMinorRawScale(note: Note): Note[] {
    const formula = [2, 1, 2, 2, 1, 2, 2];
    const scale = new Scale(note, formula);

    return scale.getRawScale();
}

export class Scale {
    private notes = Object.keys(NotesEnum) as Note[];
    private scale: Note[] = [];

    constructor(private rootNote: Note, private formula: number[]) {
        if (this.notes.indexOf(this.rootNote) === -1) {
            throw new Error(`Wrong note: ${rootNote}`);
        }

        this.scale.push(this.rootNote);

        this.formula.forEach((val) => {
            const prevNotePosition = this.notes.indexOf(this.scale[this.scale.length - 1]);
            const newNote = this.notes[(prevNotePosition + val) % this.notes.length] as Note;
            this.scale.push(newNote);
        });
    }

    public getRawScale() {
        return this.scale;
    }
}
