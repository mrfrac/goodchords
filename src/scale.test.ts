import { getMajorRawScale, getMinorRawScale } from ".";
import { NoteLetter } from "./Note";

describe("Raw scales testing", () => {
  test("Major scale testing", () => {
    expect(getMajorRawScale("C")).toEqual([
      "C",
      "D",
      "E",
      "F",
      "G",
      "A",
      "B",
      "C",
    ]);
  });

  test("Minor scale testing", () => {
    expect(getMinorRawScale("A")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "A",
    ]);
  });

  test("Wrong chord", () => {
    expect(() => getMajorRawScale("Z" as NoteLetter)).toThrow();
  });
});
