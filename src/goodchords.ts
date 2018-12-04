import { Note, NotesEnum } from "./notes";
import { getMajorRawScale, getMinorRawScale } from "./scale";
import { Chord, ChordContextEnum } from "./chord";

export class GoodChords {
    public circle: Array<[Chord, Chord]> = [];
    private notes = Object.keys(NotesEnum);

    constructor() {
        this.circle.push([new Chord("C"), new Chord(getMajorRawScale("C")[5], ChordContextEnum.Minor)]);

        for(let i = 0; i < 11; i++) {
            const prevStep = this.circle[this.circle.length - 1];
            const prevMajorNote = prevStep[0].note;
            const prevMinorNote = prevStep[1].note;
            const majorScale = getMajorRawScale(prevMajorNote);
            const minorScale = getMinorRawScale(prevMinorNote);

            this.circle.push([new Chord(majorScale[4]), new Chord(minorScale[4], ChordContextEnum.Minor)]);
        }
    }

    public getCircle() {
        return this.circle;
    }
}
