import { Note, NotesEnum } from "./notes";

export enum ChordContextEnum {
    Major,
    Minor,
}

export class Chord {
    public note: Note;
    public context: ChordContextEnum;

    constructor(note: Note, context: ChordContextEnum = ChordContextEnum.Major) {
        if (Object.keys(NotesEnum).indexOf(note) === -1) {
            throw new Error(`Wrong note: ${note}`);
        }

        this.note = note;
        this.context = context;
    }

    public toString(): string {
        return `${this.note}${this.context === ChordContextEnum.Minor ? "m" : "" }`;
    }
}
