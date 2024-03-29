import { Interval } from "../interval";
import { Note } from "../note";
import { Chord } from "./chord";

describe("Chord class testing", () => {
  test("should properly construct chord", () => {
    expect(() => {
      Chord.fromString("zz");
    }).toThrow();

    expect(Chord.fromString("Az").getNotes()).toEqual([]);

    expect(
      new Chord("A", [Interval.fromString("P1")])
        .getNotes()
        .map((note) => note.toString()),
    ).toEqual(["A4"]);

    expect(new Chord("A", "").getNotes()).toEqual([]);
  });

  test("should properly construct chord from string", () => {
    const chord = Chord.fromString("Am");
    expect(chord.getNotes().map((note) => note.toString())).toEqual([
      "A4",
      "C5",
      "E5",
    ]);
  });

  test("should properly construct chord from Note object", () => {
    const chord = new Chord(Note.fromString("A"), "m");
    expect(chord.getNotes().map((note) => note.toString())).toEqual([
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

  test("should get all chords", () => {
    expect(Chord.getChords().length).toBeGreaterThan(0);
  });

  test("should correct work", () => {
    const chord = Chord.fromString("E7#5sus4");
    expect(chord.getNotes()[2].toString()).toBe("B#4");
  });
});
