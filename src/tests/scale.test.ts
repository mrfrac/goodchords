import { Interval } from "../Interval";
import { SCALES } from "../knowledge";
import { Note } from "../Note";
import { Scale } from "../Scale";

describe("Scale class testing", () => {
  const majorScale = SCALES.find((scale) => scale.names.includes("major"));
  expect(majorScale).toBeDefined();

  if (majorScale) {
    test("Should correct generate major (ionian) scale", () => {
      let scale = new Scale("A", majorScale.formula);
      expect(scale.getNotes().map((note) => note.toString())).toEqual([
        "A4",
        "B4",
        "C#4",
        "D4",
        "E4",
        "F#4",
        "G#4",
      ]);
      const note = Note.fromString("B");
      scale = new Scale(note, majorScale.formula);
      expect(scale.getNotes().map((note) => note.toString())).toEqual([
        "B4",
        "C#4",
        "D#4",
        "E4",
        "F#4",
        "G#4",
        "A#4",
      ]);
      scale = new Scale("C#4", majorScale.formula);
      expect(scale.getNotes().map((note) => note.toString())).toEqual([
        "C#4",
        "D#4",
        "E#4",
        "F#4",
        "G#4",
        "A#4",
        "B#4",
      ]);
      const formula = majorScale.formula.map((intervalName) =>
        Interval.fromString(intervalName as string),
      );
      scale = new Scale("Db4", formula);
      expect(scale.getNotes().map((note) => note.toString())).toEqual([
        "Db4",
        "Eb4",
        "F4",
        "Gb4",
        "Ab4",
        "Bb4",
        "C4",
      ]);
    });
  }
});
