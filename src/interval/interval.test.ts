import { Interval } from "./interval";

describe("Interval class testing", () => {
  test("Should correct converse fromString -> toString", () => {
    expect(Interval.fromString("P1").toString()).toBe("P1");
    expect(Interval.fromString("1P").toString()).toBe("P1");
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
  });
  test("Should correct get semitones", () => {
    expect(new Interval(1, "A").semitones()).toBe(1);
    expect(new Interval(6, "m").semitones()).toBe(8);
    expect(new Interval(5, "d").semitones()).toBe(6);
    expect(new Interval(4, "P").semitones()).toBe(5);
  });
  test("Major Interval validity", () => {
    expect(Interval.fromString("M1").isValid()).toBeFalsy();
    expect(Interval.fromString("M2").isValid()).toBeTruthy();
    expect(Interval.fromString("M3").isValid()).toBeTruthy();
    expect(Interval.fromString("M4").isValid()).toBeFalsy();
    expect(Interval.fromString("M5").isValid()).toBeFalsy();
    expect(Interval.fromString("M6").isValid()).toBeTruthy();
    expect(Interval.fromString("M7").isValid()).toBeTruthy();
    expect(Interval.fromString("M8").isValid()).toBeTruthy();
    expect(Interval.fromString("M9").isValid()).toBeTruthy();
    expect(Interval.fromString("M10").isValid()).toBeTruthy();
    expect(Interval.fromString("M25").isValid()).toBeTruthy();
    expect(Interval.fromString("M26").isValid()).toBeTruthy();
  });
  test("Minor interval validity", () => {
    expect(Interval.fromString("m1").isValid()).toBeFalsy();
    expect(Interval.fromString("m2").isValid()).toBeTruthy();
    expect(Interval.fromString("m3").isValid()).toBeTruthy();
    expect(Interval.fromString("m4").isValid()).toBeFalsy();
    expect(Interval.fromString("m5").isValid()).toBeFalsy();
    expect(Interval.fromString("m6").isValid()).toBeTruthy();
    expect(Interval.fromString("m7").isValid()).toBeTruthy();
    expect(Interval.fromString("m8").isValid()).toBeTruthy();
    expect(Interval.fromString("m15").isValid()).toBeTruthy();
    expect(Interval.fromString("m16").isValid()).toBeTruthy();
  });
  test("Perfect interval validity", () => {
    expect(Interval.fromString("P1").isValid()).toBeTruthy();
    expect(Interval.fromString("P2").isValid()).toBeFalsy();
    expect(Interval.fromString("P3").isValid()).toBeFalsy();
    expect(Interval.fromString("P4").isValid()).toBeTruthy();
    expect(Interval.fromString("P5").isValid()).toBeTruthy();
    expect(Interval.fromString("P6").isValid()).toBeFalsy();
    expect(Interval.fromString("P7").isValid()).toBeFalsy();
    expect(Interval.fromString("P8").isValid()).toBeTruthy();
    expect(Interval.fromString("P26").isValid()).toBeTruthy();
    expect(Interval.fromString("P29").isValid()).toBeTruthy();
  });

  test("Augumented interval validity", () => {
    expect(Interval.fromString("A1").isValid()).toBeTruthy();
    expect(Interval.fromString("A2").isValid()).toBeTruthy();
    expect(Interval.fromString("A3").isValid()).toBeTruthy();
    expect(Interval.fromString("A4").isValid()).toBeTruthy();
    expect(Interval.fromString("A5").isValid()).toBeTruthy();
    expect(Interval.fromString("A6").isValid()).toBeTruthy();
    expect(Interval.fromString("A7").isValid()).toBeTruthy();
    expect(Interval.fromString("A8").isValid()).toBeTruthy();
    expect(Interval.fromString("A24").isValid()).toBeTruthy();
    expect(Interval.fromString("A25").isValid()).toBeTruthy();
  });

  test("Diminished interval validity", () => {
    expect(Interval.fromString("d1").isValid()).toBeFalsy();
    expect(Interval.fromString("d2").isValid()).toBeTruthy();
    expect(Interval.fromString("d3").isValid()).toBeTruthy();
    expect(Interval.fromString("d4").isValid()).toBeTruthy();
    expect(Interval.fromString("d5").isValid()).toBeTruthy();
    expect(Interval.fromString("d6").isValid()).toBeTruthy();
    expect(Interval.fromString("d7").isValid()).toBeTruthy();
    expect(Interval.fromString("d8").isValid()).toBeTruthy();
    expect(Interval.fromString("d25").isValid()).toBeTruthy();
  });

  test("Interval octaves", () => {
    expect(Interval.fromString("A25").octaves).toBe(3);
    expect(Interval.fromString("A17").octaves).toBe(2);
    expect(Interval.fromString("A3").octaves).toBe(0);
    expect(Interval.fromString("A8").octaves).toBe(1);
  });

  test("Semitones", () => {
    expect(Interval.fromString("P11").semitones()).toBe(17);
    expect(Interval.fromString("P12").semitones()).toBe(19);
    expect(Interval.fromString("P15").semitones()).toBe(24);
    expect(Interval.fromString("P18").semitones()).toBe(29);
    expect(Interval.fromString("P19").semitones()).toBe(31);
    expect(Interval.fromString("P22").semitones()).toBe(36);

    expect(Interval.fromString("A12").semitones()).toBe(20);
    expect(Interval.fromString("A14").semitones()).toBe(24);
    expect(Interval.fromString("A17").semitones()).toBe(29);
    expect(Interval.fromString("A22").semitones()).toBe(37);
    expect(Interval.fromString("A24").semitones()).toBe(41);

    expect(Interval.fromString("M12").semitones()).toBe(19);
    expect(Interval.fromString("M14").semitones()).toBe(23);
    expect(Interval.fromString("M15").semitones()).toBe(24);
    expect(Interval.fromString("M17").semitones()).toBe(28);
    expect(Interval.fromString("M22").semitones()).toBe(36);
    expect(Interval.fromString("M24").semitones()).toBe(40);

    expect(Interval.fromString("m12").semitones()).toBe(19);
    expect(Interval.fromString("m14").semitones()).toBe(22);
    expect(Interval.fromString("m17").semitones()).toBe(27);
    expect(Interval.fromString("m22").semitones()).toBe(36);
    expect(Interval.fromString("m24").semitones()).toBe(39);

    expect(Interval.fromString("d12").semitones()).toBe(18);
    expect(Interval.fromString("d14").semitones()).toBe(21);
    expect(Interval.fromString("d17").semitones()).toBe(26);
    expect(Interval.fromString("d22").semitones()).toBe(35);
    expect(Interval.fromString("d24").semitones()).toBe(38);
  });
});
