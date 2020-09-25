import { Interval } from "../interval/index";
import { IAccidental, INoteInfo } from "./interfaces";

const NOTES_DICT = "ABCDEFG";
const NOTES_DISTANCES = [2, 1, 2, 2, 1, 2, 2];

export class Note {
  public static fromString(note: string): Note {
    const regex = /^([a-g]{1})([#b]{1,})?([0-9]{1})?$/i;

    const tokens = note.match(regex);

    if (tokens) {
      const noteLetter = String(tokens[1]).toUpperCase();
      const octave = parseInt(tokens[3], 10) || 4;
      return new Note(noteLetter, tokens[2], octave);
    }

    // @todo типизировать ошибку
    throw new Error(`Wrong note format: ${note}`);
  }

  private accidentals: IAccidental;

  public constructor(
    private note: string,
    accidental: string,
    private octave: number,
  ) {
    this.accidentals = {
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
    return `${this.note}${this.accidentals.asString}${this.octave}`;
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
    const distanceToTargetNote = Note.fromString(this.note).distanceTo(
      targetNoteLetter,
    );

    let targetNoteAccidentalIndex = this.accidentals.index;
    const intervalPitchClass = interval.getPitchClass() || 0;
    const pitchDifference = Math.abs(intervalPitchClass - distanceToTargetNote);
    if (intervalPitchClass > distanceToTargetNote) {
      targetNoteAccidentalIndex += pitchDifference;
    } else if (intervalPitchClass < distanceToTargetNote) {
      targetNoteAccidentalIndex -= pitchDifference;
    }

    let targetNoteAccidentalString = "";

    if (targetNoteAccidentalIndex < 0) {
      const absoluteAccidentalIndex = Math.abs(targetNoteAccidentalIndex);
      const num =
        Math.floor(absoluteAccidentalIndex / 12) +
        (absoluteAccidentalIndex % 12);
      targetNoteAccidentalString = "b".repeat(num);
    } else if (targetNoteAccidentalIndex > 0) {
      targetNoteAccidentalString = "#".repeat(targetNoteAccidentalIndex % 12);
    }

    return new Note(
      targetNoteLetter,
      targetNoteAccidentalString,
      this.octave + interval.octaves,
    );
  }

  public distanceTo(note: Note | string): number {
    if (typeof note === "string") {
      note = Note.fromString(note);
    }

    const slice = (begin: number, end: number) => {
      if (begin > end) {
        return [
          ...NOTES_DISTANCES.slice(begin),
          ...NOTES_DISTANCES.slice(0, end),
        ];
      }

      return NOTES_DISTANCES.slice(begin, end);
    };

    const distanceToTargetNote = slice(
      NOTES_DICT.indexOf(this.note),
      NOTES_DICT.indexOf(note.note),
    ).reduce((prev, current) => current + prev, 0);

    return (
      (note.octave - this.octave) * 12 +
      distanceToTargetNote +
      note.accidentals.index -
      this.accidentals.index
    );
  }

  public getInfo(): INoteInfo {
    return {
      note: this.note,
      octave: this.octave,
      accidentals: this.accidentals,
    };
  }
}
