import { Chord } from "../chord";
import { Interval } from "../interval";
import { Note } from "../note/note";
import { Scale } from "./scale";

describe("Scale class testing", () => {
  test("Should correct generate major (ionian) scale", () => {
    const majorScaleFormula = ["P1", "M2", "M3", "P4", "P5", "M6", "M7"];

    let scale = new Scale("A", majorScaleFormula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5"]);
    const note = Note.fromString("B");
    scale = new Scale(note, majorScaleFormula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["B4", "C#5", "D#5", "E5", "F#5", "G#5", "A#5"]);
    scale = new Scale("C#4", majorScaleFormula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["C#4", "D#4", "E#4", "F#4", "G#4", "A#4", "B#4"]);
    const formula = majorScaleFormula.map((intervalName) =>
      Interval.fromString(intervalName),
    );
    scale = new Scale("Db4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["Db4", "Eb4", "F4", "Gb4", "Ab4", "Bb4", "C5"]);
  });

  test("Should correct generate harmonic minor scale", () => {
    const formula = ["P1", "M2", "m3", "P4", "P5", "m6", "M7"];

    let scale = new Scale("Db4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["Db4", "Eb4", "Fb4", "Gb4", "Ab4", "Bbb4", "C5"]);

    scale = new Scale("F#4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["F#4", "G#4", "A4", "B4", "C#5", "D5", "E#5"]);
  });

  test("Should correct generate minor pentatonic scale", () => {
    const formula = ["P1", "m3", "P4", "P5", "m7"];

    let scale = new Scale("Db4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["Db4", "Fb4", "Gb4", "Ab4", "Cb5"]);

    scale = new Scale("C#4", formula, true);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["C#4", "E4", "F#4", "G#4", "B4"]);

    expect(scale.getScaleInfo()?.name).toBe("Pentatonic minor");

    const scaleWithoutInfo = new Scale("C#4", formula);
    expect(scaleWithoutInfo.getScaleInfo()?.name).toBeUndefined();
  });

  test("Should correct generate major pentatonic scale", () => {
    const formula = ["P1", "M2", "M3", "P5", "M6"];

    let scale = new Scale("C#4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["C#4", "D#4", "E#4", "G#4", "A#4"]);

    scale = new Scale("Eb4", formula);
    expect(
      scale.getNotes().map((noteInstance) => noteInstance.toString()),
    ).toEqual(["Eb4", "F4", "G4", "Bb4", "C5"]);
  });

  test("Should correct build scale by name", () => {
    expect(new Scale("A4", "Major").getNotes().length).toBe(7);
    expect(new Scale("A4", "1iosnianasdfadg%^&").getNotes().length).toBe(0);
    expect(new Scale("A4", "ionian").getScaleInfo()?.name).toBe("Major");
    expect(new Scale("A4", ["1P"]).getScaleInfo()).toBeUndefined();
  });

  test("Should correct build scale by alternative name", () => {
    expect(
      new Scale("A4", "Diminished (wholetone - halftone)").getNotes().length,
    ).toBe(8);
  });

  test("Should correct check for included notes", () => {
    const scale = new Scale("C#4", ["P1", "M2", "M3", "P5", "M6"]);
    expect(scale.includes("D#")).toBeTruthy();
    expect(scale.includes("Eb")).toBeTruthy();
    expect(scale.includes("G#7")).toBeTruthy();
    expect(scale.includes("B")).toBeFalsy();
  });

  test("Should correct generate chords", () => {
    const formula = ["P1", "M2", "M3", "P4", "P5", "6M", "7M"];

    const scale = new Scale("C", formula);

    const levels = scale.getChords();

    const chordsSimplify = (chords: Chord[]): string[] => {
      return chords.map((chord) => chord.toString());
    };

    expect(chordsSimplify(levels[0]).includes("Cmaj")).toBeTruthy();
    expect(chordsSimplify(levels[1]).includes("Dm")).toBeTruthy();
    expect(chordsSimplify(levels[2]).includes("Em")).toBeTruthy();
    expect(chordsSimplify(levels[3]).includes("Fmaj")).toBeTruthy();
    expect(chordsSimplify(levels[4]).includes("Gmaj")).toBeTruthy();
    expect(chordsSimplify(levels[5]).includes("Am")).toBeTruthy();
    expect(chordsSimplify(levels[6]).includes("Bdim")).toBeTruthy();
  });
});
