import { Chord } from "./chord";

describe("Chord class testing", () => {
  test("should properly construct chord", () => {
    expect(() => {
      Chord.fromString("zz");
    }).toThrow();
  });

  test("should properly construct chord from string", () => {
    const chord = Chord.fromString("Am");
    expect(chord.getNotes().map((note) => note.toString())).toEqual([
      "A4",
      "C5",
      "E5",
    ]);
    const chord2 = Chord.fromString("Cm");
    expect(chord2.getNotes().map((note) => note.toString())).toEqual([
      "A4",
      "C5",
      "E5",
    ]);
  });

  test("should generate major chord", () => {
    expect(
      new Chord("C", ["1P", "3M", "5P"])
        .getNotes()
        .map((note) => note.toString()),
    ).toEqual(["C4", "E4", "G4"]);
    expect(
      new Chord("F#", ["1P", "3M", "5P"])
        .getNotes()
        .map((note) => note.toString()),
    ).toEqual(["F#4", "A#4", "C#5"]);
  });

  test("should generate minor chord", () => {
    expect(
      new Chord("G#", ["1P", "3m", "5P"])
        .getNotes()
        .map((note) => note.toString()),
    ).toEqual(["G#4", "B4", "D#5"]);
    expect(
      new Chord("D#", ["1P", "3m", "5P"])
        .getNotes()
        .map((note) => note.toString()),
    ).toEqual(["D#4", "F#4", "A#4"]);
  });
});
