import { INTERVALS } from "./intervals";

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
    const regex = /^(([PMmAd]{1})(\d{1,2}))|((\d{1,2})([PMmAd]{1}))$/;

    const tokens = String(name).match(regex);

    if (tokens && tokens[1]) {
      return new Interval(
        parseInt(tokens[3], 10),
        tokens[2] as TIntervalQuality,
      );
    } else if (tokens && tokens[4]) {
      return new Interval(
        parseInt(tokens[5], 10),
        tokens[6] as TIntervalQuality,
      );
    }

    throw new Error(`Wrong interval string value: ${name}`);
  }

  public readonly quality: TIntervalQuality;
  public readonly octaves: number = 0;
  public readonly num: number;
  private isValidValue = false;
  private semitonesValue = 0;

  /**
   * @param {number} num - Interval number
   * @param {TIntervalQuality} quality - Interval quality
   * @example
   * new Interval(1, "P");
   * @example
   * Interval.fromString("P1");
   * @see https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality
   */
  public constructor(num: number, quality: TIntervalQuality) {
    this.num = num;
    this.octaves = Math.floor((Math.abs(this.num) - 1) / 7); //num > 8 ? Math.trunc(num / 8) : 0;
    this.quality = quality;

    if (INTERVALS[this.quality]) {
      const simpleIntervals = Object.keys(INTERVALS[this.quality]).map(
        (key) => +key,
      );

      if (this.num <= simpleIntervals[simpleIntervals.length - 1]) {
        if (simpleIntervals.includes(this.num)) {
          this.semitonesValue = INTERVALS[this.quality][this.num];
          this.isValidValue = true;
        }
      } else {
        let correction = 0;

        const mpSizes = [
          ...Object.values(INTERVALS.M),
          ...Object.values(INTERVALS.P),
        ].sort((a, b) => a - b);
        const step = (Math.abs(this.num) - 1) % 7;

        switch (this.quality) {
          case "A":
            correction = 1;
            break;
          case "m":
            correction = [1, 2, 5, 6].includes(step) ? -1 : 0;
            break;
          case "d":
            correction = -1 * ([0, 3, 4].includes(step) ? 1 : 2);
            break;
        }

        this.semitonesValue = mpSizes[step] + correction + 12 * this.octaves;

        this.isValidValue = !isNaN(this.semitonesValue);
      }
    }
  }

  /**
   * @returns {number} Pitch class
   */
  public semitones(): number | undefined {
    if (this.isValid()) {
      return this.semitonesValue;
    }
  }

  /**
   * Check interval validity
   * @returns {boolean}
   */
  public isValid(): boolean {
    return this.isValidValue;
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

  public is_compound(): boolean {
    return this.num > 8;
  }
}
