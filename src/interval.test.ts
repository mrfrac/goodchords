import { Interval } from "./Interval";

describe("Interval class testing", () => {
  test("Should correct converse fromString -> toString", () => {
    expect(Interval.fromString("P1").toString()).toBe("P1");
    expect(Interval.fromString("m7").toString()).toBe("m7");
  });
  test("Should correct construct class instance", () => {
    const interval = new Interval(1, "P");
    expect(interval.toString()).toBe("P1");
  });
  test("Should throw error on bad interval name", () => {
    expect(() => {
      Interval.fromString("ZZ");
    }).toThrow();
    expect(() => {
      Interval.fromString("m8");
    }).toThrow();
  });
  test("Should correct get semitones", () => {
    expect(new Interval(1, "A").getSemitones()).toBe(1);
    expect(new Interval(6, "m").getSemitones()).toBe(8);
    expect(new Interval(5, "d").getSemitones()).toBe(6);
    expect(new Interval(4, "P").getSemitones()).toBe(5);
  });
});
