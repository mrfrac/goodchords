import { Note } from "../note";
import { Interval } from "../interval";
import { SCALES_LIB } from "./lib";

/**
 * Scale class
 * @example
 *  new Scale("A4", ["P1", "M2", "M3", "P4", "P5", "M6", "M7"])
 *  new Scale("A5", "major");
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
   * @param {Array<Interval | string>} scale Scale formula or name
   */
  public constructor(
    rootNote: string | Note,
    scale: Array<Interval | string> | string,
  ) {
    if (typeof rootNote === "string") {
      this.rootNote = Note.fromString(rootNote);
    } else {
      this.rootNote = rootNote;
    }

    let formula: Array<string | Interval> = [];

    if (typeof scale === "string") {
      formula =
        SCALES_LIB.find(
          (item) =>
            item.name.toLowerCase() === scale.toLowerCase() ||
            item.altNames
              ?.map((altName) => altName.toLowerCase())
              ?.indexOf(scale.toLowerCase()) ||
            -1 >= 0,
        )?.formula || [];
      console.log(scale, formula);
    } else {
      formula = scale;
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
