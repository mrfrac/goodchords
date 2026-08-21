import { Interval, Note, Scale } from "goodchords";
import { TuningPreset } from "./fretboard.data";

export interface ScaleEntry {
  readonly pitchClass: number;
  readonly noteName: string;
  readonly degree: string;
  readonly isRoot: boolean;
}

export interface FretCell {
  readonly fret: number;
  readonly absoluteNote: string;
  readonly scaleNote?: string;
  readonly degree?: string;
  readonly isRoot: boolean;
  readonly ariaLabel?: string;
}

export interface FretboardString {
  readonly stringNumber: number;
  readonly openNote: string;
  readonly openLabel: string;
  readonly cells: readonly FretCell[];
}

export interface FretboardViewModel {
  readonly frets: readonly number[];
  readonly strings: readonly FretboardString[];
  readonly scaleEntries: readonly ScaleEntry[];
}

export interface FretboardConfig {
  readonly tuning: TuningPreset;
  readonly fretCount: number;
  readonly root: string;
  readonly scaleName: string;
}

const CHROMATIC_INTERVALS = [
  { num: 1, quality: "P" },
  { num: 2, quality: "m" },
  { num: 2, quality: "M" },
  { num: 3, quality: "m" },
  { num: 3, quality: "M" },
  { num: 4, quality: "P" },
  { num: 4, quality: "A" },
  { num: 5, quality: "P" },
  { num: 6, quality: "m" },
  { num: 6, quality: "M" },
  { num: 7, quality: "m" },
  { num: 7, quality: "M" },
] as const;

const MAJOR_PERFECT_SEMITONES = [0, 2, 4, 5, 7, 9, 11] as const;

export function intervalToDegree(interval: string | Interval): string {
  const parsed =
    typeof interval === "string" ? Interval.fromString(interval) : interval;
  const zeroBasedDegree = Math.abs(parsed.num) - 1;
  const simpleDegree = zeroBasedDegree % 7;
  const octaveCount = Math.floor(zeroBasedDegree / 7);
  const reference = MAJOR_PERFECT_SEMITONES[simpleDegree] + octaveCount * 12;
  const alteration = parsed.semitones() - reference;
  const accidental =
    alteration < 0 ? "b".repeat(-alteration) : "#".repeat(alteration);

  return `${accidental}${parsed.num}`;
}

export function transposeBySemitones(note: Note, semitones: number): Note {
  const octaveCount = Math.floor(semitones / 12);
  const chromaticInterval = CHROMATIC_INTERVALS[semitones % 12];
  const intervalNumber = chromaticInterval.num + octaveCount * 7;
  const interval = Interval.fromString(
    `${intervalNumber}${chromaticInterval.quality}`,
  );

  return note.transpose(interval);
}

export function buildFretboard(config: FretboardConfig): FretboardViewModel {
  const scale = new Scale(`${config.root}4`, config.scaleName);
  const scaleInfo = scale.getScaleInfo();

  if (!scaleInfo) {
    throw new Error(`Unknown scale: ${config.scaleName}`);
  }

  const rootPitchClass = pitchClass(Note.fromString(config.root));
  const scaleNotes = scale.getNotes();
  const scaleEntries = scaleNotes.map(
    (note, index): ScaleEntry => ({
      pitchClass: pitchClass(note),
      noteName: note.toString(true),
      degree: intervalToDegree(scaleInfo.formula[index]),
      isRoot: pitchClass(note) === rootPitchClass,
    }),
  );
  const frets = Array.from({ length: config.fretCount + 1 }, (_, fret) => fret);
  const strings = [...config.tuning.notes]
    .map((openNote, index) => ({ openNote, stringNumber: index + 1 }))
    .reverse()
    .map(({ openNote, stringNumber }): FretboardString => {
      const open = Note.fromString(openNote);
      const displayNumber = config.tuning.notes.length - stringNumber + 1;
      const cells = frets.map((fret): FretCell => {
        const note = transposeBySemitones(open, fret);
        const entry = scale.includes(note)
          ? scaleEntries.find(
              (candidate) => candidate.pitchClass === pitchClass(note),
            )
          : undefined;
        const absoluteNote = note.toString();

        if (!entry) {
          return {
            fret,
            absoluteNote,
            isRoot: false,
          };
        }

        return {
          fret,
          absoluteNote,
          scaleNote: entry.noteName,
          degree: entry.degree,
          isRoot: entry.isRoot,
          ariaLabel: `String ${displayNumber}, fret ${fret}: ${entry.noteName}, degree ${entry.degree}${entry.isRoot ? ", root" : ""}`,
        };
      });

      return {
        stringNumber: displayNumber,
        openNote,
        openLabel: open.toString(true),
        cells,
      };
    });

  return { frets, strings, scaleEntries };
}

function pitchClass(note: Note): number {
  return ((note.number() % 12) + 12) % 12;
}
