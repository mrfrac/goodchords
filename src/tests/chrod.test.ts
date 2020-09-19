import { Chord, NoteLetter } from "../chord";

describe("Chord testing", () => {
  test("Chord throws", () => {
    expect(() => new Chord("Z" as NoteLetter)).toThrow();
  });
});
