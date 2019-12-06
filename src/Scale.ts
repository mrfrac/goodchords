import { Interval } from "./Interval";
import { Note } from "./Note";

export class Scale {
  private rootNote: Note;
  private formula: Interval[] = [];
  private notes: Note[] = [];

  public constructor(
    rootNote: string | Note,
    formula: Array<Interval | string>,
  ) {
    if (typeof rootNote === "string") {
      this.rootNote = Note.fromString(rootNote);
    } else {
      this.rootNote = rootNote;
    }

    formula.forEach((interval) => {
      if (typeof interval === "string") {
        this.formula.push(Interval.fromString(interval));
      } else {
        this.formula.push(interval);
      }
    });

    // @todo сделать определение знаков альтерации
    // const isSharps = this.rootNote.accidental === AccidentalsEnum.None || this.rootNote.accidental === AccidentalsEnum.Sharp;

    this.formula.forEach((interval) => {
      this.notes.push(this.rootNote.transpose(interval));
    });

    // if (this.rootNote.accidental === AccidentalsEnum.None || this.rootNote.accidental === )
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}
