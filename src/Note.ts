export enum NotesEnum {
  A = "A",
  Bb = "Bb",
  B = "B",
  C = "C",
  Db = "Db",
  D = "D",
  Eb = "Eb",
  E = "E",
  F = "F",
  Gb = "Gb",
  G = "G",
  Ab = "Ab",
}

export enum AccidentalsEnum {
  None,
  Flat,
  Sharp,
}

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NoteLetter = keyof typeof NotesEnum;

export class Note {
  public static fromString(note: string): Note {
    const regex = /^([c-g]{1})([#b]{1})?([0-9]{1})?$/;

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
    throw new Error("Wrong note format");
  }

  private note: NoteLetter;
  private accidental: AccidentalsEnum;
  private octave: Octave;

  public constructor(
    note: NoteLetter,
    accidental: AccidentalsEnum,
    octave: Octave,
  ) {
    this.note = note;
    this.accidental = accidental;
    this.octave = octave;
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
}
