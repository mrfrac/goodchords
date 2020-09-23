import { Note } from "../Note";

describe("Note class testing", () => {
  test("Should throw error", () => {
    expect(() => Note.fromString("")).toThrow();
  });
  test("Should be correct converse fromString -> toString", () => {
    const cs1 = Note.fromString("c#1");
    expect(cs1.toString()).toBe("C#1");
    const d = Note.fromString("d");
    expect(d.toString()).toBe("D4");
    const d5 = Note.fromString("d5");
    expect(d5.toString()).toBe("D5");
    const db5 = Note.fromString("db5");
    expect(db5.toString()).toBe("Db5");
    expect(Note.fromString("Ab4").toString()).toBe("Ab4");
  });

  test("Should be correct construct note", () => {
    const n1 = new Note("A", "", 3);
    expect(n1.toString()).toBe("A3");
    expect(n1.getInfo().accidentals.asString).toBe("");
    expect(n1.getInfo().accidentals.index).toBe(0);
    const n2 = new Note("B", "bb", 7);
    expect(n2.toString()).toBe("Bbb7");
    expect(n2.getInfo().accidentals.asString).toBe("bb");
    expect(n2.getInfo().accidentals.index).toBe(-2);
    const n3 = new Note("B", "##", 8);
    expect(n3.toString()).toBe("B##8");
    expect(n3.getInfo().accidentals.asString).toBe("##");
    expect(n3.getInfo().accidentals.index).toBe(2);
  });

  describe("Transpose testing", () => {
    test("Major intervals", () => {
      expect(Note.fromString("C").transpose("M2").toString()).toBe("D4");
      expect(Note.fromString("C").transpose("M3").toString()).toBe("E4");
      expect(Note.fromString("C").transpose("M6").toString()).toBe("A4");
      expect(Note.fromString("C").transpose("M7").toString()).toBe("B4");
      expect(Note.fromString("C").transpose("M15").toString()).toBe("B5");
      expect(Note.fromString("C").transpose("M23").toString()).toBe("B6");

      expect(Note.fromString("C").transpose("M1").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("M4").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("M5").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("M8").toString()).toBe("C4");
    });

    test("Minor intervals", () => {
      expect(Note.fromString("C").transpose("m2").toString()).toBe("Db4");
      expect(Note.fromString("C").transpose("m3").toString()).toBe("Eb4");
      expect(Note.fromString("C").transpose("m6").toString()).toBe("Ab4");
      expect(Note.fromString("C").transpose("m7").toString()).toBe("Bb4");
      expect(Note.fromString("C##4").transpose("m2").toString()).toBe("D#4");
      expect(Note.fromString("Cbbb4").transpose("m2").toString()).toBe(
        "Dbbbb4",
      );

      expect(Note.fromString("C").transpose("m1").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("m4").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("m5").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("m8").toString()).toBe("C4");
    });

    test("Augumented intervals", () => {
      expect(Note.fromString("C").transpose("A1").toString()).toBe("C#4");
      expect(Note.fromString("C").transpose("A2").toString()).toBe("D#4");
      expect(Note.fromString("C").transpose("A3").toString()).toBe("E#4");
      expect(Note.fromString("C").transpose("A4").toString()).toBe("F#4");
      expect(Note.fromString("C").transpose("A5").toString()).toBe("G#4");
      expect(Note.fromString("C").transpose("A6").toString()).toBe("A#4");
      expect(Note.fromString("C").transpose("A9").toString()).toBe("C#5");
      expect(Note.fromString("C").transpose("A10").toString()).toBe("D#5");
      expect(Note.fromString("C").transpose("A11").toString()).toBe("E#5");

      expect(Note.fromString("C").transpose("A8").toString()).toBe("C4");
    });

    test("Diminished intervals", () => {
      expect(Note.fromString("C").transpose("d2").toString()).toBe("Dbb4");
      expect(Note.fromString("C").transpose("d3").toString()).toBe("Ebb4");
      expect(Note.fromString("C").transpose("d4").toString()).toBe("Fb4");
      expect(Note.fromString("C").transpose("d5").toString()).toBe("Gb4");
      expect(Note.fromString("C").transpose("d6").toString()).toBe("Abb4");
      expect(Note.fromString("C").transpose("d7").toString()).toBe("Bbb4");
      expect(Note.fromString("C").transpose("d10").toString()).toBe("Dbb5");
      expect(Note.fromString("C").transpose("d11").toString()).toBe("Ebb5");

      expect(Note.fromString("C").transpose("d1").toString()).toBe("C4");
    });

    test("Perfect intervals", () => {
      expect(Note.fromString("C").transpose("P1").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("P4").toString()).toBe("F4");
      expect(Note.fromString("C").transpose("P5").toString()).toBe("G4");
      expect(Note.fromString("C").transpose("P8").toString()).toBe("C4");
      expect(Note.fromString("C").transpose("P17").toString()).toBe("C6");

      expect(Note.fromString("C").transpose("P10").toString()).toBe("C4");
    });
  });

  describe("distanceTo testing", () => {
    expect(Note.fromString("C").distanceTo("C")).toEqual(0);
    expect(Note.fromString("C").distanceTo("C5")).toEqual(12);
    expect(Note.fromString("C").distanceTo("C3")).toEqual(-12);
    expect(Note.fromString("C").distanceTo("C7")).toEqual(36);
    expect(Note.fromString("Db").distanceTo("D")).toEqual(1);
    expect(Note.fromString("D#").distanceTo("D")).toEqual(-1);
    expect(Note.fromString("E").distanceTo("G")).toEqual(3);
  });
});
