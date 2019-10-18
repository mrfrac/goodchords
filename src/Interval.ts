import { INTERVALS } from "./knowledge";

export type TIntervalNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TIntervalQuality = "P" | "M" | "m" | "A" | "d";

export class Interval {
  /**
   * @todo Improve regex
   * @param name
   */
  public static fromString(name: string): Interval {
    const regex = /^([PMmAd]{1})(\d{1,2})$/;

    const tokens = String(name).match(regex);

    if (tokens && tokens[0]) {
      return new Interval(
        parseInt(tokens[2], 10) as TIntervalNumber,
        tokens[1] as TIntervalQuality,
      );
    }

    throw new Error(`Wrong interval string value: ${name}`);
  }

  private num: TIntervalNumber;
  private quality: TIntervalQuality;

  /**
   * @todo
   * - add validation
   * - direction
   */
  public constructor(num: TIntervalNumber, quality: TIntervalQuality) {
    this.num = num;
    this.quality = quality;

    if (!this.isValid()) {
      throw new Error(`Has no interval information: ${this.toString()}`);
    }
  }

  public getSemitones(): number {
    if (
      INTERVALS.hasOwnProperty(this.quality) &&
      INTERVALS[this.quality][this.num] >= 0
    ) {
      return INTERVALS[this.quality][this.num];
    }

    throw new Error(`Interval ${this.toString()} nas no semitones value`);
  }

  public isValid(): boolean {
    try {
      this.getSemitones();
    } catch (e) {
      return false;
    }

    return true;
  }

  public toString(): string {
    return `${this.quality}${this.num}`;
  }
}
