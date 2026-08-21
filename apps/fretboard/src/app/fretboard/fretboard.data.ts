export type LabelMode = "notes" | "degrees";

export interface TuningPreset {
  readonly id: string;
  readonly label: string;
  readonly notes: readonly string[];
}

export interface RootOption {
  readonly label: string;
  readonly value: string;
}

export interface ScaleOption {
  readonly id: string;
  readonly label: string;
  readonly catalogName: string;
}

export const TUNING_PRESETS: readonly TuningPreset[] = [
  {
    id: "standard",
    label: "Standard",
    notes: ["E2", "A2", "D3", "G3", "B3", "E4"],
  },
  {
    id: "drop-d",
    label: "Drop D",
    notes: ["D2", "A2", "D3", "G3", "B3", "E4"],
  },
  {
    id: "d-standard",
    label: "D Standard",
    notes: ["D2", "G2", "C3", "F3", "A3", "D4"],
  },
  {
    id: "open-g",
    label: "Open G",
    notes: ["D2", "G2", "D3", "G3", "B3", "D4"],
  },
] as const;

export const ROOT_OPTIONS: readonly RootOption[] = [
  { label: "C", value: "C" },
  { label: "C#", value: "C#" },
  { label: "Db", value: "Db" },
  { label: "D", value: "D" },
  { label: "Eb", value: "Eb" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "F#", value: "F#" },
  { label: "Gb", value: "Gb" },
  { label: "G", value: "G" },
  { label: "Ab", value: "Ab" },
  { label: "A", value: "A" },
  { label: "Bb", value: "Bb" },
  { label: "B", value: "B" },
] as const;

export const SCALE_OPTIONS: readonly ScaleOption[] = [
  { id: "major", label: "Major", catalogName: "Major" },
  {
    id: "natural-minor",
    label: "Natural Minor",
    catalogName: "Minor (natural, pure)",
  },
  {
    id: "major-pentatonic",
    label: "Major Pentatonic",
    catalogName: "Pentatonic major",
  },
  {
    id: "minor-pentatonic",
    label: "Minor Pentatonic",
    catalogName: "Pentatonic minor",
  },
  {
    id: "major-blues",
    label: "Major Blues",
    catalogName: "Major blues",
  },
  {
    id: "minor-blues",
    label: "Minor Blues",
    catalogName: "Minor blues",
  },
  { id: "dorian", label: "Dorian", catalogName: "Dorian" },
  { id: "mixolydian", label: "Mixolydian", catalogName: "Mixolydian" },
] as const;

export const FRET_COUNTS = Array.from({ length: 13 }, (_, index) => index + 12);
