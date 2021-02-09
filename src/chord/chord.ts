import { Interval } from "../interval";
import { Note } from "../note";
import { Scale } from "../scale";
import { IChordInfo } from "./interfaces";

import { CHORDS_LIB } from "./lib";

export class Chord {
  static fromString(chord: string): Chord {
    const regex = /^([a-g]{1})([#b]{1,})?(.*)$/i;
    const tokens = chord.match(regex);

    if (tokens) {
      const note = `${tokens[1]}${tokens[2] || ""}`;
      const chordName = tokens[3];

      return new Chord(note, chordName);
    }

    throw new Error(`Wrong chord format: ${chord}`);
  }

  static getChordByName(name: string): IChordInfo | undefined {
    return CHORDS_LIB.find((chord) => chord.abbreviation.includes(name));
  }

  static getChords(): IChordInfo[] {
    return CHORDS_LIB;
  }

  private note: Note;
  private notes: Note[] = [];
  private info: IChordInfo = {
    abbreviation: [],
    formula: [],
    name: "",
  };

  public constructor(note: Note | string, chordName: string);
  public constructor(note: Note | string, formula: string[]);
  public constructor(note: Note | string, formula: Interval[]);
  public constructor(note: Note | string, chordInfo: IChordInfo);
  public constructor(note: Note | string, formula: unknown) {
    this.note = typeof note === "string" ? Note.fromString(note) : note;

    if (typeof formula === "string") {
      const chordData = Chord.getChordByName(formula);

      if (chordData) {
        this.info = chordData;
      }
    } else if (Array.isArray(formula)) {
      this.info.formula = formula.map((interval: string | Interval) =>
        typeof interval !== "string" ? interval.toString() : interval,
      );
    } else {
      //  if (typeof formula === "object")
      this.info = formula as IChordInfo;
    }
    this.notes = new Scale(this.note, this.info.formula || []).getNotes();
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  /**
   * @description Get string representation of Chord
   */
  public toString(): string {
    return `${this.note.toString(true)}${this.info.abbreviation[0]}`;
  }
}
