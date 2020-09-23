import { Chord, ChordContextEnum, NoteLetter } from "../chord";

describe("Chord testing", () => {
  test("Chord throws", () => {
    expect(() => new Chord("Z" as NoteLetter)).toThrow();
  });
  test("Chord is ok", () => {
    expect(new Chord("C" as NoteLetter).context).toBe(ChordContextEnum.Major);
    expect(new Chord("C" as NoteLetter).note).toBe("C");
  });
});
