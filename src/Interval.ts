type TIntervalNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type TIntervalQuality = "P" | "M" | "m" | "A" | "d";

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

    throw new Error(`Wrong interval name: ${name}`);
  }

  private num: TIntervalNumber;
  private quality: TIntervalQuality;

  /**
   * @todo
   * - add validation
   * - add compound intervals logic
   * - direction
   */
  public constructor(num: TIntervalNumber, quality: TIntervalQuality) {
    this.num = num;
    this.quality = quality;
  }

  public toString(): string {
    return `${this.quality}${this.num}`;
  }
}
