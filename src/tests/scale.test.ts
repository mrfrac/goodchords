import { SCALES } from "../knowledge";
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
      scale = new Scale("B", majorScale.formula);
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
      // @todo FIX:
      /* console.log(scale.getNotes().map(n => n.toString()))
      expect(scale.getNotes().map((note) => note.toString())).toEqual([
        "C#4",
        "D#4",
        "E#4",
        "F#4",
        "G#4",
        "A#4",
        "B#4",
        "C#4",
      ]);*/
    });
  }
});
