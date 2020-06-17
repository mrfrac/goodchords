import { INTERVALS } from "./knowledge";

export type TIntervalNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TIntervalQuality = "P" | "M" | "m" | "A" | "d";

/**
 * Simple Music Interval class realisation
 * @todo
 *  - Move knowledge to knowledge
 * @see https://en.wikipedia.org/wiki/Interval_(music)
 */
export class Interval {
  /**
   * String to Interval conversion
   * @todo Improve regex
   * @throws {Error} If invalid interval string value passed
   * @param {string} name - Interval string value (P1, ...)
   * @returns {Interval}
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

  public readonly num: TIntervalNumber;
  public readonly quality: TIntervalQuality;

  /**
   * @param {TIntervalNumber} num - Interval number
   * @param {TIntervalQuality} quality - Interval quality
   * @example
   * new Interval(1, "P");
   * @example
   * Interval.fromString("P1");
   * @see https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality
   */
  public constructor(num: TIntervalNumber, quality: TIntervalQuality) {
    this.num = num;
    this.quality = quality;
  }

  /**
   * @returns {number} Pitch class
   */
  public getPitchClass(): number {
    if (
      INTERVALS.hasOwnProperty(this.quality) &&
      INTERVALS[this.quality][this.num] >= 0
    ) {
      return INTERVALS[this.quality][this.num];
    }

    throw new Error(`Interval ${this.toString()} nas no semitones value`);
  }

  /**
   * Check interval validity
   * @returns {boolean}
   */
  public isValid(): boolean {
    const majorIntervalMask = [0, 1, 1, 0, 0, 1, 1, 0];
    const augIntervalMask = [1, 1, 1, 1, 1, 1, 1, 0];
    const dimIntervalMask = [0, 1, 1, 1, 1, 1, 0, 1];

    if (["M", "m"].includes(this.quality)) {
      return majorIntervalMask[this.num - 1] === 1;
    }

    if (this.quality === "P") {
      return majorIntervalMask[this.num - 1] === 0;
    }

    if (this.quality === "A") {
      return augIntervalMask[this.num - 1] === 1;
    }

    if (this.quality === "d") {
      return dimIntervalMask[this.num - 1] === 1;
    }

    return false;
  }

  /**
   * Interval to string conversion
   * @example
   * // returns P1
   * new Interval(1, "P").toString();
   * @returns {string}
   */
  public toString(): string {
    return `${this.quality}${this.num}`;
  }
}
