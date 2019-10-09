import { Interval } from "./Interval";

describe("Interval class testing", () => {
  test("Should correct converse fromString -> toString", () => {
    expect(Interval.fromString("P0").toString()).toBe("P0");
    expect(Interval.fromString("m8").toString()).toBe("m8");
  });
  test("Should correct construct class instance", () => {
    const interval = new Interval(1, "P");
    expect(interval.toString()).toBe("P1");
  });
  test("Should throw error on bad interval name", () => {
    expect(() => {
      Interval.fromString("ZZ");
    }).toThrow();
  });
});
