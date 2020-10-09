import { Interval } from "../interval/index";
import { NoteLetter } from "../note-letter";
import { IAccidental } from "./interfaces";

export class Note {
  public static fromString(note: string): Note {
    const regex = /^([a-g]{1})([#b]{1,})?([0-9]{1})?$/i;

    const tokens = note.match(regex);

    if (tokens) {
      const noteLetter = String(tokens[1]).toUpperCase();
      let octave = parseInt(tokens[3], 10);

      if (!octave && octave !== 0) {
        octave = 4;
      }

      return new Note(noteLetter, tokens[2], octave);
    }

    // @todo типизировать ошибку
    throw new Error(`Wrong note format: ${note}`);
  }

  private accidentals: IAccidental;
  private noteLetter: NoteLetter;

  public constructor(note: string, accidental: string, private octave: number) {
    this.noteLetter = new NoteLetter(note);
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
    return `${this.noteLetter}${this.accidentals.asString}${this.octave}`;
  }

  public transpose(interval: string | Interval): Note {
    interval =
      typeof interval === "string" ? Interval.fromString(interval) : interval;

    if (!interval.isValid()) {
      throw new Error("Wrong interval");
    }

    let simpleIntervalNum = interval.num - 1;
    if (interval.is_compound()) {
      simpleIntervalNum = (interval.num % 7) - 1;
    }

    const targetNoteLetter = this.noteLetter.next(simpleIntervalNum);

    const intervalPitchClass = interval.semitones() || 0;
    const targetNoteNumber =
      this.number() + intervalPitchClass - this.accidentals.index;
    const targeNoteOctave = Math.trunc(targetNoteNumber / 12);

    const distanceToTargetNote = Note.fromString(
      `${this.noteLetter.letter}${this.octave}`,
    ).distanceTo(new Note(targetNoteLetter.letter, "", targeNoteOctave));

    let targetNoteAccidentalIndex = this.accidentals.index;
    const pitchDifference = Math.abs(intervalPitchClass - distanceToTargetNote);
    if (intervalPitchClass > distanceToTargetNote) {
      targetNoteAccidentalIndex += pitchDifference;
    } else if (intervalPitchClass < distanceToTargetNote) {
      targetNoteAccidentalIndex -= pitchDifference;
    }

    let targetNoteAccidentalString = "";

    const absoluteAccidentalIndex = Math.abs(targetNoteAccidentalIndex);
    const num = absoluteAccidentalIndex % 12;
    if (targetNoteAccidentalIndex < 0) {
      targetNoteAccidentalString = "b".repeat(num);
    } else if (targetNoteAccidentalIndex > 0) {
      targetNoteAccidentalString = "#".repeat(num);
    }

    return new Note(
      targetNoteLetter.letter,
      targetNoteAccidentalString,
      targeNoteOctave,
    );
  }

  public distanceTo(note: Note | string): number {
    if (typeof note === "string") {
      note = Note.fromString(note);
    }

    return note.number() - this.number();
  }

  public frequency(): number {
    const distanceFromA4 = Note.fromString("A4").distanceTo(this);
    return +Number(440 * Math.pow(2, distanceFromA4 / 12)).toFixed(2);
  }

  public number(): number {
    return this.octave * 12 + this.noteLetter.distance + this.accidentals.index;
  }
}
