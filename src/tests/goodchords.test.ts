import { GoodChords } from "../goodchords";
import { NoteLetter } from "../Note";

describe("GoodChords class testing", () => {
  test("Raw circle of fifths", () => {
    const gChords = new GoodChords();
    const circle = gChords
      .getCircle()
      .map((item) => [item[0].toString(), item[1].toString()]);
    expect(circle).toEqual([
      ["C", "Am"],
      ["G", "Em"],
      ["D", "Bm"],
      ["A", "Gbm"],
      ["E", "Dbm"],
      ["B", "Abm"],
      ["Gb", "Ebm"],
      ["Db", "Bbm"],
      ["Ab", "Fm"],
      ["Eb", "Cm"],
      ["Bb", "Gm"],
      ["F", "Dm"],
    ]);
  });

  test("getGoodChords testing", () => {
    const gChords = new GoodChords();
    let chords = gChords.getGoodChords("C").map((chord) => chord.toString());
    expect(chords).toEqual(["C", "Dm", "Em", "F", "G", "Am"]);

    chords = gChords.getGoodChords("Eb", 1).map((chord) => chord.toString());
    expect(chords).toEqual(["Ebm", "Gb", "Abm", "B", "Bbm", "Db"]);

    expect(() => gChords.getGoodChords("Z" as NoteLetter)).toThrow();
  });
});
