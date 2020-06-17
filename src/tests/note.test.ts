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
  describe("Transpose:", () => {
    test("M3: C4 to E4", () => {
      expect(
        Note.fromString("C4")
          .transpose("M3")
          .toString(),
      ).toBe("E4");
    });

    test("M3: E4 to G#4", () => {
      expect(
        Note.fromString("E4")
          .transpose("M3")
          .toString(),
      ).toBe("G#4");
    });

    test("P1: A4 to A4", () => {
      expect(
        Note.fromString("A")
          .transpose("P1")
          .toString(),
      ).toBe("A4");
    });

    test("P8: A4 to A5", () => {
      expect(
        Note.fromString("A")
          .transpose("P8")
          .toString(),
      ).toBe("A5");
    });

    test("P8 (as interval): A4 to A5", () => {
      expect(
        Note.fromString("A")
          .transpose(new Interval(8, "P"))
          .toString(),
      ).toBe("A5");
    });

    test("M3 (as interval): G4 to B4", () => {
      expect(
        Note.fromString("G")
          .transpose(new Interval(3, "M"))
          .toString(),
      ).toBe("B4");
    });

    test("Bad Interval: G to throw", () => {
      expect(() => {
        Note.fromString("G").transpose(
          new Interval(3, "Z" as TIntervalQuality),
        );
      }).toThrow();
    });
  });
});
