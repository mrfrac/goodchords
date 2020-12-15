import { Interval } from "../interval";
import { Note } from "../note";
import { Scale } from "../scale";

import { findChordByName } from "./lib";

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

  private note: Note;
  private notes: Note[] = [];
  private formula: Interval[];

  public constructor(note: Note | string, chordName: string);
  public constructor(note: Note | string, formula: string[]);
  public constructor(note: Note | string, formula: Interval[]);
  public constructor(note: Note | string, formula: unknown) {
    this.note = typeof note === "string" ? Note.fromString(note) : note;

    if (typeof formula === "string") {
      const chordData = findChordByName(formula);
      this.formula =
        chordData?.formula?.map((interval) => Interval.fromString(interval)) ||
        [];
    } else {
      this.formula = Array.isArray(formula)
        ? formula.map((interval: string | Interval) =>
            typeof interval === "string"
              ? Interval.fromString(interval)
              : interval,
          )
        : [];
    }
    this.notes = new Scale(this.note, this.formula).getNotes();
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}
