/**
 * Internal API class for note letters
 * @private
 * @class
 */
export class NoteLetter {
  public readonly letter: string;
  public readonly index: number;
  public readonly distance: number;
  private readonly letters = "CDEFGAB";
  private readonly distances = [0, 2, 4, 5, 7, 9, 11];

  constructor(letter: string) {
    this.letter = letter.toUpperCase();

    this.index = this.letters.indexOf(this.letter);

    if (this.index < 0) {
      throw new Error(`Wrong note letter: ${letter}`);
    }

    this.distance = this.distances[this.index];
  }

  public valueOf(): string {
    return this.letter;
  }

  public next(step: number): NoteLetter {
    return new NoteLetter(
      this.letters[(this.index + step) % this.letters.length],
    );
  }
}
