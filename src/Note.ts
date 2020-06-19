import { Interval } from "./Interval";

export type OctaveType = number;

interface IAccidental {
  asString: string;
  index: number;
}

export class Note {
  public static fromString(note: string): Note {
    const regex = /^([a-g]{1})([#b]{1,})?([0-9]{1})?$/i;

    const tokens = note.match(regex);

    if (tokens) {
      const noteLetter = String(tokens[1]).toUpperCase();
      const octave = (parseInt(tokens[3], 10) as OctaveType) || 4;
      return new Note(noteLetter, tokens[2], octave);
    }

    // @todo типизировать ошибку
    throw new Error(`Wrong note format: ${note}`);
  }

  private accidental: IAccidental;

  public constructor(
    private note: string,
    accidental: string,
    private octave: OctaveType,
  ) {
    this.accidental = {
      asString: accidental || "",
      index: accidental
        ? accidental
            .split("")
            .map((letter) => (letter === "#" ? 1 : -1))
            .reduce((prev, curr) => prev + curr, 0)
        : 0,
    };
  }

  public toString(): string {
    return `${this.note}${this.accidental.asString}${this.octave}`;
  }

  public accidentals(): IAccidental {
    return this.accidental;
  }

  public transpose(interval: string | Interval): Note {
    interval =
      typeof interval === "string" ? Interval.fromString(interval) : interval;

    if (!interval.isValid()) {
      return this;
    }

    const notesDict = "ABCDEFG";
    const targetNoteIndex =
      (notesDict.indexOf(this.note) + interval.num - 1) % notesDict.length;
    const targetNoteLetter = notesDict[targetNoteIndex];
    let targetNoteAccidentalIndex = this.accidental.index;
    let targetNoteAccidentalString = "";

    if (interval.quality === "m") {
      targetNoteAccidentalIndex -= 1;
    }

    if (interval.quality === "A") {
      targetNoteAccidentalIndex += 1;
    }

    if (interval.quality === "d") {
      targetNoteAccidentalIndex -=
        interval.num === 4 || interval.num === 5 ? 1 : 2;
    }

    if (targetNoteAccidentalIndex < 0) {
      targetNoteAccidentalString = "b".repeat(
        Math.abs(targetNoteAccidentalIndex),
      );
    } else if (targetNoteAccidentalIndex > 0) {
      targetNoteAccidentalString = "#".repeat(targetNoteAccidentalIndex);
    }

    return new Note(
      targetNoteLetter,
      targetNoteAccidentalString,
      this.octave + interval.octaves,
    );
  }
}
