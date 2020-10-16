import { Note } from "../note";
import { Interval } from "../interval";

/**
 * Scale class
 * @example
 *  new Scale("A4", ["P1", "M2", "M3", "P4", "P5", "M6", "M7"])
 *  new Scale(new Note("A", "", 4), "P1", "M2", "M3", "P4", "P5", "M6", "M7")
 * @public
 * @class
 */
export class Scale {
  private rootNote: Note;
  private formula: Interval[] = [];
  private notes: Note[] = [];

  /**
   * Scale constructor
   * @param {string | Note } rootNote
   * @param {Array<Interval | string>} formula
   */
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
}
