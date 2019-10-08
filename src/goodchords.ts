import { Chord, ChordContextEnum } from "./chord";
import { NoteLetter } from "./Note";
import { getMajorRawScale, getMinorRawScale } from "./scale";

/**
 * @deprecated
 */
export class GoodChords {
  public circle: Array<[Chord, Chord]> = [];

  constructor() {
    this.circle.push([
      new Chord("C"),
      new Chord(getMajorRawScale("C")[5], ChordContextEnum.Minor),
    ]);

    for (let i = 0; i < 11; i++) {
      const prevStep = this.circle[this.circle.length - 1];
      const prevMajorNote = prevStep[0].note;
      const prevMinorNote = prevStep[1].note;
      const majorScale = getMajorRawScale(prevMajorNote);
      const minorScale = getMinorRawScale(prevMinorNote);

      this.circle.push([
        new Chord(majorScale[4]),
        new Chord(minorScale[4], ChordContextEnum.Minor),
      ]);
    }
  }

  public getCircle(): Array<[Chord, Chord]> {
    return this.circle;
  }

  public getGoodChords(
    tonic: NoteLetter,
    context: ChordContextEnum = ChordContextEnum.Major,
  ): Chord[] {
    const home = this.circle.find((item: [Chord, Chord]) => {
      const index = context === ChordContextEnum.Major ? 0 : 1;
      return item[index].note === tonic;
    });

    if (!home) {
      // todo Change error text
      throw new Error(`Some troubles with tonic`);
    }

    const homeIndex = this.circle.indexOf(home);
    const right = this.circle[(homeIndex + 1) % this.circle.length];
    const left = this.circle[this.circle.length - homeIndex - 1];

    // @todo sorting
    if (context === ChordContextEnum.Major) {
      return [home[0], left[1], right[1], left[0], right[0], home[1]];
    }

    return [home[1], home[0], left[1], left[0], right[1], right[0]];
  }
}
