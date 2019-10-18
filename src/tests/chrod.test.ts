import { Chord } from "../chord";
import { NoteLetter } from "../Note";

describe("Chord testing", () => {
  test("Chord throws", () => {
    expect(() => new Chord("Z" as NoteLetter)).toThrow();
  });
});
