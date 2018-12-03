import { Note, NotesEnum } from "./notes";
import { getMajorRawScale, getMinorRawScale } from "./scale";

export class GoodChords {
    public circle: Array<[Note, Note]> = [];
    private notes = Object.keys(NotesEnum);

    constructor() {
        this.circle.push(["C", getMajorRawScale("C")[5]]);

        for(let i = 0; i < 11; i++) {
            const step: Note[] = [];
            const prevStep = this.circle[this.circle.length - 1];
            const prevMajorNote = prevStep[0];
            const prevMinorNote = prevStep[1];
            const majorScale = getMajorRawScale(prevMajorNote);
            const minorScale = getMinorRawScale(prevMinorNote);

            this.circle.push([majorScale[4], minorScale[4]]);
        }
    }

    public getCircle() {
        return this.circle;
    }
}