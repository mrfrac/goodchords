import { Interval } from "../interval";
import { Note } from "../note/note";
import { Scale } from "./scale";

describe("Scale class testing", () => {
  test("Should correct generate major (ionian) scale", () => {
    const majorScaleFormula = ["P1", "M2", "M3", "P4", "P5", "M6", "M7"];

    let scale = new Scale("A", majorScaleFormula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "A4",
      "B4",
      "C#5",
      "D5",
      "E5",
      "F#5",
      "G#5",
    ]);
    const note = Note.fromString("B");
    scale = new Scale(note, majorScaleFormula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "B4",
      "C#5",
      "D#5",
      "E5",
      "F#5",
      "G#5",
      "A#5",
    ]);
    scale = new Scale("C#4", majorScaleFormula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "C#4",
      "D#4",
      "E#4",
      "F#4",
      "G#4",
      "A#4",
      "B#4",
    ]);
    const formula = majorScaleFormula.map((intervalName) =>
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
      "C5",
    ]);
  });

  test("Should correct generate harmonic minor scale", () => {
    const formula = ["P1", "M2", "m3", "P4", "P5", "m6", "M7"];

    let scale = new Scale("Db4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "Db4",
      "Eb4",
      "Fb4",
      "Gb4",
      "Ab4",
      "Bbb4",
      "C5",
    ]);

    scale = new Scale("F#4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "F#4",
      "G#4",
      "A4",
      "B4",
      "C#5",
      "D5",
      "E#5",
    ]);
  });

  test("Should correct generate minor pentatonic scale", () => {
    const formula = ["P1", "m3", "P4", "P5", "m7"];

    let scale = new Scale("Db4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "Db4",
      "Fb4",
      "Gb4",
      "Ab4",
      "Cb5",
    ]);

    scale = new Scale("C#4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "C#4",
      "E4",
      "F#4",
      "G#4",
      "B4",
    ]);
  });

  test("Should correct generate major pentatonic scale", () => {
    const formula = ["P1", "M2", "M3", "P5", "M6"];

    let scale = new Scale("C#4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "C#4",
      "D#4",
      "E#4",
      "G#4",
      "A#4",
    ]);

    scale = new Scale("Eb4", formula);
    expect(scale.getNotes().map((note) => note.toString())).toEqual([
      "Eb4",
      "F4",
      "G4",
      "Bb4",
      "C5",
    ]);
  });

  test("Should correct build scale by name", () => {
    expect(new Scale("A4", "ionian").getNotes().length).toBe(7);
    expect(new Scale("A4", "1iosnianasdfadg%^&").getNotes().length).toBe(0);
  });

  test("Should correct build scale by alternative name", () => {
    expect(
      new Scale("A4", "Diminished (wholetone - halftone)").getNotes().length,
    ).toBe(7);
  });
});
