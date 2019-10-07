import { NoteLetter, NotesEnum } from "./notes";

export enum ChordContextEnum {
    Major,
    Minor,
}

export class Chord {
    public note: NoteLetter;
    public context: ChordContextEnum;

    constructor(note: NoteLetter, context: ChordContextEnum = ChordContextEnum.Major) {
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
