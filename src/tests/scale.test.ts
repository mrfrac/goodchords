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
        "Db4",
        "D4",
        "E4",
        "Gb4",
        "Ab4",
      ]);
      scale = new Scale("Ab4", majorScale.formula);
      // console.log(scale.getNotes().map((t) => t.toString()));
    });
  }
});
