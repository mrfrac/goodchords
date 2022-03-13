import { Note } from "../note";
import { Interval } from "../interval";
import { SCALES_LIB } from "./lib";
import { IScale } from "./interfaces";
import { Chord, CHORDS_LIB } from "../chord";

/**
 * Scale class
 * @example
 *  new Scale("A4", ["P1", "M2", "M3", "P4", "P5", "M6", "M7"])
 *  new Scale("A5", "major");
 *  new Scale(new Note("A", "", 4), "P1", "M2", "M3", "P4", "P5", "M6", "M7")
 * @public
 * @class
 */
export class Scale {
  private scaleInfo?: IScale;
  private rootNote: Note;
  private formula: Interval[] = [];
  private notes: Note[] = [];

  /**
   * Get all known by app scales
   * @returns {IScale[]}
   */
  static getScales(): IScale[] {
    return SCALES_LIB;
  }

  /**
   * Find scale by name
   * @param {string} name
   * @returns {IScale | undefined}
   */
  static getScaleByName(name: string): IScale | undefined {
    name = name.toLowerCase();
    return SCALES_LIB.find((scale) => {
      if (scale.name.toLowerCase() === name) {
        return true;
      } else if (scale.altNames) {
        return scale.altNames.some((altName) => altName.toLowerCase() === name);
      }
      return false;
    });
  }

  /**
   * Scale constructor
   * @param {string | Note } rootNote
   * @param {Array<Interval | string>} scale Scale formula or name
   * @op
   */
  public constructor(rootNote: string | Note, scale: string);
  public constructor(
    rootNote: string | Note,
    scale: Interval[],
    find?: boolean,
  );
  public constructor(rootNote: string | Note, scale: string[], find?: boolean);
  public constructor(
    rootNote: string | Note,
    scale: Array<Interval | string> | string,
    find = false,
  ) {
    if (typeof rootNote === "string") {
      this.rootNote = Note.fromString(rootNote);
    } else {
      this.rootNote = rootNote;
    }

    let formula: Array<string | Interval>;

    if (typeof scale === "string") {
      this.scaleInfo = Scale.getScaleByName(scale);
      formula = this.scaleInfo?.formula ?? [];
    } else {
      formula = scale;
    }

    formula.forEach((interval) => {
      if (typeof interval === "string") {
        this.formula.push(Interval.fromString(interval));
      } else {
        this.formula.push(interval);
      }
    });

    if (find) {
      this.scaleInfo = this.getScaleByFormula(this.formula);
    }

    this.formula.forEach((interval) => {
      this.notes.push(this.rootNote.transpose(interval));
    });
  }

  /**
   * Calculated note for scale
   * @returns {Note[]}
   */
  public getNotes(): Note[] {
    return this.notes;
  }

  /**
   * Returns scale description
   * @returns {IScale | undefined}
   */
  public getScaleInfo(): IScale | undefined {
    return this.scaleInfo;
  }

  public getChords(): Array<Chord[]> {
    const result = [];

    for (const note of this.notes) {
      const chords: Chord[] = [];

      CHORDS_LIB.forEach((chordInfo) => {
        const chord = new Chord(note, chordInfo);
        const chordNotes = chord.getNotes();
        if (chordNotes.every((chordNote) => this.includes(chordNote))) {
          chords.push(chord);
        }
      });

      result.push(chords);
    }

    return result;
  }

  public includes(note: Note | string): boolean {
    if (typeof note === "string") {
      note = Note.fromString(note);
    }

    const numbers = this.notes.map(
      (noteInstance) => noteInstance.number() % 12,
    );

    return numbers.includes(note.number() % 12);
  }

  public getExtendedScales(): IScale[] {
    const result = [];

    for (const scaleItem of Scale.getScales()) {
      const newScale = new Scale(this.rootNote, scaleItem.name);
      const isSameNotes = this.notes.every((noteItem) =>
        newScale.includes(noteItem),
      );

      if (isSameNotes && newScale.notes.length > this.notes.length) {
        result.push(scaleItem);
      }
    }

    return result;
  }

  /**
   * Find scale by formula
   * @param {Interval[]} formula
   * @returns {IScale | undefined}
   */
  private getScaleByFormula(formula: Interval[]): IScale | undefined {
    const formulaHash = formula.map((interval) => interval.toString()).join("");
    return SCALES_LIB.find((scale) => {
      const scaleFormulaHash = scale.formula.join("");
      return scaleFormulaHash === formulaHash;
    });
  }
}
