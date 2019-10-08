import { Note } from "./Note";

describe("Note class testing", () => {
  test("Should throw error", () => {
    expect(() => Note.fromString("")).toThrow();
  });
  test("Should be correct", () => {
    const cs1 = Note.fromString("c#1");
    expect(cs1.toString()).toBe("C#1");
    const d = Note.fromString("d");
    expect(d.toString()).toBe("D4");
    const d5 = Note.fromString("d5");
    expect(d5.toString()).toBe("D5");
    const db5 = Note.fromString("db5");
    expect(db5.toString()).toBe("Db5");
  });
});
