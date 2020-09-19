export enum ChordContextEnum {
  Major,
  Minor,
}

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

/**
 * @deprecated
 */
export class Chord {
  public note: NoteLetter;
  public context: ChordContextEnum;

  constructor(
    note: NoteLetter,
    context: ChordContextEnum = ChordContextEnum.Major,
  ) {
    if (Object.keys(NotesEnum).indexOf(note) === -1) {
      throw new Error(`Wrong note: ${note}`);
    }

    this.note = note;
    this.context = context;
  }

  public toString(): string {
    return `${this.note}${this.context === ChordContextEnum.Minor ? "m" : ""}`;
  }
}
