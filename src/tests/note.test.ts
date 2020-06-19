import { Interval, TIntervalQuality } from "../Interval";
import { AccidentalsEnum, Note } from "../Note";

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
    const n1 = new Note("A", AccidentalsEnum.None, 3);
    expect(n1.toString()).toBe("A3");
    const n2 = new Note("B", AccidentalsEnum.Flat, 7);
    expect(n2.toString()).toBe("Bb7");
    const n3 = new Note("B", AccidentalsEnum.Sharp, 8);
    expect(n3.toString()).toBe("B#8");
  });

  describe("Transpose testing", () => {
    test("Major intervals", () => {
      expect(Note.fromString("C").transpose("M2").toString()).toBe("D4");
      expect(Note.fromString("C").transpose("M3").toString()).toBe("E4");
      expect(Note.fromString("C").transpose("M6").toString()).toBe("A4");
      expect(Note.fromString("C").transpose("M7").toString()).toBe("B4");

      expect(() => Note.fromString("C").transpose("M1")).toThrow();
      expect(() => Note.fromString("C").transpose("M4")).toThrow();
      expect(() => Note.fromString("C").transpose("M5")).toThrow();
      expect(() => Note.fromString("C").transpose("M8")).toThrow();
    });
    test("Minor intervals", () => {
      expect(Note.fromString("C").transpose("m2").toString()).toBe("Db4");
      expect(Note.fromString("C").transpose("m3").toString()).toBe("Eb4");
      expect(Note.fromString("C").transpose("m6").toString()).toBe("Ab4");
      expect(Note.fromString("C").transpose("m7").toString()).toBe("Bb4");

      expect(() => Note.fromString("C").transpose("m1")).toThrow();
      expect(() => Note.fromString("C").transpose("m4")).toThrow();
      expect(() => Note.fromString("C").transpose("m5")).toThrow();
      expect(() => Note.fromString("C").transpose("m8")).toThrow();
    });
  });
});
