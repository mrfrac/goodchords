import { Interval } from "goodchords";
import { describe, expect, it } from "vitest";
import {
  buildFretboard,
  intervalToDegree,
  transposeBySemitones,
} from "./fretboard.adapter";
import { SCALE_OPTIONS, TUNING_PRESETS } from "./fretboard.data";
import { Note } from "goodchords";

const standardTuning = TUNING_PRESETS[0];

describe("intervalToDegree", () => {
  it.each([
    ["1P", "1"],
    ["3m", "b3"],
    ["4A", "#4"],
    ["5d", "b5"],
    ["7d", "bb7"],
    [Interval.fromString("9M"), "9"],
  ])("converts %s to %s", (interval, degree) => {
    expect(intervalToDegree(interval)).toBe(degree);
  });
});

describe("transposeBySemitones", () => {
  it("uses goodchords intervals across two octaves", () => {
    expect(transposeBySemitones(Note.fromString("E2"), 0).number()).toBe(
      Note.fromString("E2").number(),
    );
    expect(transposeBySemitones(Note.fromString("E2"), 12).number()).toBe(
      Note.fromString("E3").number(),
    );
    expect(transposeBySemitones(Note.fromString("E2"), 24).number()).toBe(
      Note.fromString("E4").number(),
    );
  });
});

describe("buildFretboard", () => {
  it("builds open through final fret and renders high string first", () => {
    const fretboard = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "C",
      scaleName: "Major",
    });

    expect(fretboard.frets).toEqual(Array.from({ length: 13 }, (_, i) => i));
    expect(fretboard.strings).toHaveLength(6);
    expect(fretboard.strings[0]).toMatchObject({
      stringNumber: 1,
      openNote: "E4",
    });
    expect(fretboard.strings[5]).toMatchObject({
      stringNumber: 6,
      openNote: "E2",
    });
  });

  it("filters C major positions and detects roots", () => {
    const fretboard = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "C",
      scaleName: "Major",
    });
    const highE = fretboard.strings[0].cells;

    expect(highE[0]).toMatchObject({ scaleNote: "E", degree: "3" });
    expect(highE[2].scaleNote).toBeUndefined();
    expect(highE[8]).toMatchObject({
      scaleNote: "C",
      degree: "1",
      isRoot: true,
    });
  });

  it("spells A natural minor and enharmonic roots correctly", () => {
    const aMinor = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "A",
      scaleName: "Minor (natural, pure)",
    });
    expect(aMinor.scaleEntries.map((entry) => entry.noteName)).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
    ]);
    expect(aMinor.scaleEntries.map((entry) => entry.degree)).toEqual([
      "1",
      "2",
      "b3",
      "4",
      "5",
      "b6",
      "b7",
    ]);

    const fSharp = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "F#",
      scaleName: "Major",
    });
    const gFlat = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "Gb",
      scaleName: "Major",
    });
    expect(fSharp.scaleEntries[0].noteName).toBe("F#");
    expect(fSharp.scaleEntries[6].noteName).toBe("E#");
    expect(gFlat.scaleEntries[0].noteName).toBe("Gb");
    expect(gFlat.scaleEntries[6].noteName).toBe("F");
  });

  it("keeps chromatic blues degrees instead of array indexes", () => {
    const bluesOption = SCALE_OPTIONS.find(
      (option) => option.id === "major-blues",
    );
    const fretboard = buildFretboard({
      tuning: standardTuning,
      fretCount: 12,
      root: "C",
      scaleName: bluesOption?.catalogName ?? "Major blues",
    });

    expect(fretboard.scaleEntries.map((entry) => entry.degree)).toEqual([
      "1",
      "2",
      "b3",
      "3",
      "5",
      "6",
    ]);
  });
});
