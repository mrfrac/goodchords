import { Note } from "../note";
import { Interval } from "../interval";
import { SCALES_LIB } from "./lib";
import { IScale } from "./interfaces";

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
  private scaleInfo?: IScale;
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
      this.scaleInfo = this.getScaleByName(scale);
      formula = this.scaleInfo?.formula || [];
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

    this.scaleInfo = this.getScaleByFormula(this.formula);

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

  /**
   * Returns scale description
   * @returns {IScale | undefined}
   */
  public getScaleInfo(): IScale | undefined {
    return this.scaleInfo;
  }

  /**
   * Find scale by name
   * @param {string} name
   * @returns {IScale | undefined}
   */
  private getScaleByName(name: string): IScale | undefined {
    name = name.toLowerCase();
    return SCALES_LIB.find((scale) => {
      if (scale.name.toLowerCase() === name) {
        return true;
      } else if (scale.altNames) {
        return scale.altNames.some((altName) => altName.toLowerCase() === name);
      }
      return false;
    });
  }

  /**
   * Find scale by formula
   * @param {Interval[]} formula
   * @returns {IScale | undefined}
   */
  private getScaleByFormula(formula: Interval[]): IScale | undefined {
    const formulaHash = formula
      .map((interval) => `${interval.num}${interval.quality}`)
      .join("");
    return SCALES_LIB.find((scale) => {
      const scaleFormulaHash = scale.formula.join("");
      return scaleFormulaHash === formulaHash;
    });
  }
}
