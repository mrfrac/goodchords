import { Interval } from "./Interval";

export enum NotesEnum {
  A = "A",
  Bb = "-",
  B = "B",
  C = "C",
  Db = "-",
  D = "D",
  Eb = "-",
  E = "E",
  F = "F",
  Gb = "-",
  G = "G",
  Ab = "-",
}

export enum AccidentalsEnum {
  None,
  Flat,
  Sharp,
}

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NoteLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g";

export class Note {
  public static fromString(note: string): Note {
    const regex = /^([a-g]{1})([#b]{1})?([0-9]{1})?$/i;

    const tokens = note.match(regex);

    if (tokens) {
      const noteLetter = String(tokens[1]).toUpperCase() as NoteLetter;
      let acc = AccidentalsEnum.None;
      if (tokens[2] === "#") {
        acc = AccidentalsEnum.Sharp;
      } else if (tokens[2] === "b") {
        acc = AccidentalsEnum.Flat;
      }
      const octave = (parseInt(tokens[3], 10) as Octave) || 4;
      return new Note(noteLetter, acc, octave);
    }

    // @todo типизировать ошибку
    throw new Error(`Wrong note format: ${note}`);
  }

  public accidental: AccidentalsEnum;
  private index: number;
  private note: NoteLetter;
  private octave: Octave;

  public constructor(
    note: NoteLetter,
    accidental: AccidentalsEnum,
    octave: Octave,
  ) {
    this.note = note;
    this.accidental = accidental;
    this.octave = octave;

    this.index = (Object.values(NotesEnum) as string[]).indexOf(
      this.note.toUpperCase(),
    );

    if (this.accidental === AccidentalsEnum.Flat) {
      this.index -= 1;
    } else if (this.accidental === AccidentalsEnum.Sharp) {
      this.index += 1;
    }
  }

  public toString(): string {
    let acc = "";
    if (this.accidental === AccidentalsEnum.Flat) {
      acc = "b";
    } else if (this.accidental === AccidentalsEnum.Sharp) {
      acc = "#";
    }
    return `${this.note}${acc}${this.octave}`;
  }

  public transpose(interval: string | Interval): Note {
    interval =
      typeof interval === "string" ? Interval.fromString(interval) : interval;

    const notes = [
      ...Object.values(NotesEnum).slice(this.index),
      ...Object.values(NotesEnum).slice(0, this.index),
    ];

    let targetNoteCoordinate = interval.getPitchClass();
    const intervalOctaves = Math.floor(targetNoteCoordinate / 12);
    targetNoteCoordinate = targetNoteCoordinate % notes.length;
    const targetOctave = (this.octave + intervalOctaves) as Octave;
    const noteLetter = notes[targetNoteCoordinate];
    const accidental = this.accidental;

    // console.log(this.toString(), interval, targetNoteCoordinate, notes[targetNoteCoordinate]);

    if (noteLetter === "-") {
      if (
        this.accidental === AccidentalsEnum.Sharp ||
        this.accidental === AccidentalsEnum.None
      ) {
        const coord =
          targetNoteCoordinate - 1 < 0
            ? notes.length + targetNoteCoordinate - 1
            : targetNoteCoordinate - 1;
        return new Note(
          notes[coord % notes.length] as NoteLetter,
          AccidentalsEnum.Sharp,
          targetOctave,
        );
      }
    }
    /* if (this.accidental === AccidentalsEnum.Flat) {
        return new Note(
          notes[(targetNoteCoordinate + 1) % notes.length] as NoteLetter,
          AccidentalsEnum.Flat,
          targetOctave,
        );
      } else if (this.accidental === AccidentalsEnum.Sharp) {
        const coord =
          targetNoteCoordinate - 1 < 0
            ? notes.length + targetNoteCoordinate - 1
            : targetNoteCoordinate - 1;
        return new Note(
          notes[coord % notes.length] as NoteLetter,
          AccidentalsEnum.Sharp,
          targetOctave,
        );
      } else {
        targetNoteCoordinate = targetNoteCoordinate - 1 < 0 ? notes.length + targetNoteCoordinate - 1 : targetNoteCoordinate - 1;
        noteLetter = notes[targetNoteCoordinate];
        accidental = AccidentalsEnum.Sharp;
      } */
    // }

    return new Note(noteLetter as NoteLetter, accidental, targetOctave);
  }
}
