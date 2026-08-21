import { Scale } from "goodchords";
import { describe, expect, it } from "vitest";
import { SCALE_OPTIONS, TUNING_PRESETS } from "./fretboard.data";

describe("fretboard data", () => {
  it("defines the agreed octave-qualified tuning presets", () => {
    expect(
      Object.fromEntries(
        TUNING_PRESETS.map((preset) => [preset.label, preset.notes]),
      ),
    ).toEqual({
      Standard: ["E2", "A2", "D3", "G3", "B3", "E4"],
      "Drop D": ["D2", "A2", "D3", "G3", "B3", "E4"],
      "D Standard": ["D2", "G2", "C3", "F3", "A3", "D4"],
      "Open G": ["D2", "G2", "D3", "G3", "B3", "D4"],
    });
  });

  it("maps every curated scale to a goodchords catalog entry", () => {
    expect(SCALE_OPTIONS.map((option) => option.label)).toEqual([
      "Major",
      "Natural Minor",
      "Major Pentatonic",
      "Minor Pentatonic",
      "Major Blues",
      "Minor Blues",
      "Dorian",
      "Mixolydian",
    ]);

    for (const option of SCALE_OPTIONS) {
      expect(Scale.getScaleByName(option.catalogName)).toBeDefined();
    }
  });
});
