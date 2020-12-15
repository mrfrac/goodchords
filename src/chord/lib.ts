import { IChordInfo } from "./interfaces";

export function findChordByName(name: string): IChordInfo | undefined {
  return CHORDS_LIB.find((chord) => chord.abbreviation.includes(name));
}

export const CHORDS_LIB: IChordInfo[] = [
  {
    name: "Major",
    formula: ["1P", "3M", "5P"],
    abbreviation: ["maj", "M"],
  },
  {
    name: "Minor",
    formula: ["1P", "3m", "5P"],
    abbreviation: ["m", "min", "-"],
  },
  {
    name: "Fifth (power chord)",
    formula: ["1P", "5P"],
    abbreviation: ["5"],
  },
  {
    name: "Augmented",
    formula: ["1P", "3M", "5A"],
    abbreviation: ["aug", "+", "+5"],
  },
  {
    name: "Diminished",
    formula: ["1P", "3m", "5d"],
    abbreviation: ["dim", "°", "o"],
  },
  {
    name: "Suspended 4th",
    formula: ["1P", "4P", "5P"],
    abbreviation: ["sus4"],
  },
  {
    name: "Suspended 2nd",
    formula: ["1P", "2M", "5P"],
    abbreviation: ["sus2"],
  },
  {
    name: "Major added 9th",
    formula: ["1P", "3M", "5P", "9M"],
    abbreviation: ["Madd9", "2", "add9", "add2"],
  },
  {
    name: "Minor added 9th",
    formula: ["1P", "3m", "5P", "9M"],
    abbreviation: ["madd9"],
  },
  {
    name: "6th",
    formula: ["1P", "3M", "5P", "6M"],
    abbreviation: ["6", "add6", "add13", "M6"],
  },
  {
    name: "Minor 6th",
    formula: ["1P", "3m", "5P", "6M"],
    abbreviation: ["m6"],
  },
  {
    name: "6th 9th",
    formula: ["1P", "3M", "5P", "6M", "9M"],
    abbreviation: ["6/9", "69"],
  },
  {
    name: "Minor 6th 9th",
    formula: ["1P", "3m", "5P", "6M", "9M"],
    abbreviation: ["m6/9", "m69"],
  },
  {
    name: "Major 7th",
    formula: ["1P", "3M", "5P", "7M"],
    abbreviation: ["maj7", "Δ", "ma7", "M7", "Maj7"],
  },
  {
    name: "Minor 7th",
    formula: ["1P", "3m", "5P", "7m"],
    abbreviation: ["m7", "min7", "mi7", "-7"],
  },
  {
    name: "Dominant 7th",
    formula: ["1P", "3M", "5P", "7m"],
    abbreviation: ["7", "dom", "dom7"],
  },
  {
    name: "m7b5 (half diminished)",
    formula: ["1P", "3m", "5d", "7m"],
    abbreviation: ["m7b5", "min7b5", "mi7b5", "-7b5"],
  },
  {
    name: "Diminished 7th",
    formula: ["1P", "3m", "5d", "7d"],
    abbreviation: ["dim7", "°7", "o7"],
  },
  {
    name: "Dominant 7th suspended 4th",
    formula: ["1P", "4P", "5P", "7m"],
    abbreviation: ["7sus4"],
  },
  {
    name: "Minor major 7th",
    formula: ["1P", "3m", "5P", "7M"],
    abbreviation: ["m/ma7", "m/maj7", "mM7", "m/M7", "-Δ7", "mΔ"],
  },
  {
    name: "Major 9th",
    formula: ["1P", "3M", "5P", "7M", "9M"],
    abbreviation: ["maj9", "Δ9"],
  },
  {
    name: "Minor 9th",
    formula: ["1P", "3m", "5P", "7m", "9M"],
    abbreviation: ["m9", "min9", "-9"],
  },
  {
    name: "Dominant 9th",
    formula: ["1P", "3M", "5P", "7m", "9M"],
    abbreviation: ["9"],
  },
  {
    name: "9th suspended 4th",
    formula: ["1P", "4P", "5P", "7m", "9M"],
    abbreviation: ["9sus4", "9sus"],
  },
  {
    name: "Minor 11th",
    formula: ["1P", "3m", "5P", "7m", "9M", "11P"],
    abbreviation: ["m11", "min11", "-11"],
  },
  {
    name: "11th",
    formula: ["1P", "3M", "5P", "7m", "9M", "11P"],
    abbreviation: ["11"],
  },
  {
    name: "Major 13th",
    formula: ["1P", "3M", "5P", "7M", "9M", "13M"],
    abbreviation: ["maj13", "Maj13"],
  },
  {
    name: "Minor 13th",
    formula: ["1P", "3m", "5P", "7m", "9M", "13M"],
    abbreviation: ["m13", "min13", "-13"],
  },
  {
    name: "Dominant 13th",
    formula: ["1P", "3M", "5P", "7m", "9M", "13M"],
    abbreviation: ["13"],
  },
  {
    name: "Minor flat 6th",
    formula: ["1P", "3m", "5P", "6m"],
    abbreviation: ["mb6", "minb6", "-b6"],
  },
  {
    name: "Major 7th flat 5th",
    formula: ["1P", "3M", "5d", "7M"],
    abbreviation: ["maj7b5", "M7b5", "maj7-5"],
  },
  {
    name: "Major 7th sharp eleven",
    formula: ["1P", "3M", "5P", "7M", "11A"],
    abbreviation: ["maj7#11", "M7#11"],
  },
  {
    name: "Augmented 7th",
    formula: ["1P", "3M", "5A", "7m"],
    abbreviation: ["+7", "aug7", "7#5", "7aug"],
  },
  {
    name: "Dominant 7th flat 5th",
    formula: ["1P", "3M", "5d", "7m"],
    abbreviation: ["7b5", "7-5", "dom7b5"],
  },
  {
    name: "Dominant 7th flat 9th",
    formula: ["1P", "3M", "5P", "7m", "9m"],
    abbreviation: ["7b9", "7-9", "dom7b9"],
  },
  {
    name: "Dominant 7th sharp 9th",
    formula: ["1P", "3M", "5P", "7m", "9A"],
    abbreviation: ["7#9", "7+9", "dom7#9"],
  },
  {
    name: "Dominant 7th flat 5th sharp 9th",
    formula: ["1P", "3M", "5d", "7m", "9A"],
    abbreviation: ["7b5#9", "7-5+9,", "dom7b5#9"],
  },
  {
    name: "Augmented 7th flat 9th",
    formula: ["1P", "3M", "5A", "7m", "9m"],
    abbreviation: ["+7b9", "aug7b9", "7#5b9"],
  },
  {
    name: "Augmented 7th sharp 9th",
    formula: ["1P", "3M", "5A", "7m", "9A"],
    abbreviation: ["+7#9", "aug7#9", "7#5#9"],
  },
  {
    name: "Dominant 13th flat 9th",
    formula: ["1P", "3M", "5P", "7m", "9m", "13M"],
    abbreviation: ["13b9"],
  },
  {
    name: "Dominant 13th sharp 9th",
    formula: ["1P", "3M", "5P", "7m", "9A", "13M"],
    abbreviation: ["13#9"],
  },
  {
    name: "Lydian",
    formula: ["1P", "3M", "5P", "7M", "11A"],
    abbreviation: ["maj#4", "Δ#4", "Δ#11"],
  },
  {
    name: "Major 7th flat 6th",
    formula: ["1P", "3M", "6m", "7M"],
    abbreviation: ["M7b6"],
  },
  {
    name: "Dominant 7th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "11A"],
    abbreviation: ["7#11", "7#4", "7+11", "dom7#11"],
  },
  {
    name: "Altered",
    formula: ["1P", "3M", "7m", "9m"],
    abbreviation: ["alt7"],
  },
  {
    name: "Suspended 4th flat 9th",
    formula: ["1P", "4P", "5P", "7m", "9m"],
    abbreviation: ["b9sus", "phryg"],
  },
  {
    name: "Major sharp 11th",
    formula: ["1P", "3M", "5P", "7M", "9M", "11A"],
    abbreviation: ["maj9#11", "Δ9#11"],
  },
  {
    name: "Suspended 2nd 4th",
    formula: ["1P", "2M", "4P", "5P"],
    abbreviation: ["sus24", "sus4add9"],
  },
  {
    name: "Major flat 6th",
    formula: ["1P", "3M", "13m"],
    abbreviation: ["Mb6"],
  },
  {
    name: "Major 9th sharp 5th",
    formula: ["1P", "3M", "5A", "7M", "9M"],
    abbreviation: ["maj9#5", "Maj9#5"],
  },
  {
    name: "Dominant 7th sharp 5th",
    formula: ["1P", "3M", "5A", "7m"],
    abbreviation: ["7#5", "+7"],
  },
  {
    name: "Dominant 7th sharp 5th sharp 9th",
    formula: ["1P", "3M", "5A", "7m", "9A"],
    abbreviation: ["7#5#9", "+7#9", "7alt"],
  },
  {
    name: "Dominant 7th sharp 5th flat 9th",
    formula: ["1P", "3M", "5A", "7m", "9m"],
    abbreviation: ["7#5b9", "+7b9"],
  },
  {
    name: "Dominant 7th sharp 5th flat 9th sharp 11th",
    formula: ["1P", "3M", "5A", "7m", "9m", "11A"],
    abbreviation: ["7#5b9#11"],
  },
  {
    name: "Dominant 9th sharp 5th",
    formula: ["1P", "3M", "5A", "7m", "9M"],
    abbreviation: ["9#5", "9+"],
  },
  {
    name: "Dominant 9th sharp 5th sharp 11th",
    formula: ["1P", "3M", "5A", "7m", "9M", "11A"],
    abbreviation: ["9#5#11"],
  },
  {
    name: "Augmented added sharp 9th",
    formula: ["1P", "3M", "5A", "9A"],
    abbreviation: ["+add#9"],
  },
  {
    name: "Augmented added 9th",
    formula: ["1P", "3M", "5A", "9M"],
    abbreviation: ["M#5add9", "+add9"],
  },
  {
    name: "6th sharp 11th",
    formula: ["1P", "3M", "5P", "6M", "11A"],
    abbreviation: ["M6#11", "M6b5", "6#11", "6b5"],
  },
  {
    name: "6th 9th sharp 11th",
    formula: ["1P", "3M", "5P", "6M", "9M", "11A"],
    abbreviation: ["69#11"],
  },
  {
    name: "Dominant 7th flat 6th",
    formula: ["1P", "3M", "5P", "6m", "7m"],
    abbreviation: ["7b6"],
  },
  {
    name: "Major sharp 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7M", "9A", "11A"],
    abbreviation: ["maj7#9#11"],
  },
  {
    name: "Major 13th sharp 11th",
    formula: ["1P", "3M", "5P", "7M", "9M", "11A", "13M"],
    abbreviation: ["M13#11", "maj13#11", "M13+4", "M13#4"],
  },
  {
    name: "Major 7th flat 9th",
    formula: ["1P", "3M", "5P", "7M", "9m"],
    abbreviation: ["M7b9"],
  },
  {
    name: "Dominant 7th sharp 11th flat 13th",
    formula: ["1P", "3M", "5P", "7m", "11A", "13m"],
    abbreviation: ["7#11b13", "7b5b13"],
  },
  {
    name: "Dominant 7th added 13th",
    formula: ["1P", "3M", "5P", "7m", "13M"],
    abbreviation: ["7add6", "67", "7add13"],
  },
  {
    name: "Dominant 7th sharp 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9A", "11A"],
    abbreviation: ["7#9#11"],
  },
  {
    name: "Dominant 13th sharp 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9A", "11A", "13M"],
    abbreviation: ["13#9#11"],
  },
  {
    name: "Dominant 7th sharp 9th sharp elevents flat 13th",
    formula: ["1P", "3M", "5P", "7m", "9A", "11A", "13m"],
    abbreviation: ["7#9#11b13"],
  },
  {
    name: "Dominant 7th sharp 9th flat 13th",
    formula: ["1P", "3M", "5P", "7m", "9A", "13m"],
    abbreviation: ["7#9b13"],
  },
  {
    name: "Dominant 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9M", "11A"],
    abbreviation: ["9#11", "9+11", "dom9#11"],
  },
  {
    name: "Dominant 13th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9M", "11A", "13M"],
    abbreviation: ["13#11", "13+4", "13#4"],
  },
  {
    name: "Dominant 9th sharp 11th flat 13th",
    formula: ["1P", "3M", "5P", "7m", "9M", "11A", "13m"],
    abbreviation: ["9#11b13", "9b5b13"],
  },
  {
    name: "Dominant 7th flat 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9m", "11A"],
    abbreviation: ["7b9#11", "7b5b9"],
  },
  {
    name: "Dominant 13th flat 9th sharp 11th",
    formula: ["1P", "3M", "5P", "7m", "9m", "11A", "13M"],
    abbreviation: ["13b9#11"],
  },
  {
    name: "Dominant 7th flat 9th sharp 11th flat 13th",
    formula: ["1P", "3M", "5P", "7m", "9m", "11A", "13m"],
    abbreviation: ["7b9b13#11", "7b9#11b13", "7b5b9b13"],
  },
  {
    name: "Dominant 7th flat 9th flat 13th",
    formula: ["1P", "3M", "5P", "7m", "9m", "13m"],
    abbreviation: ["7b9b13"],
  },
  {
    name: "Dominant 7th flat 9th sharp ninth",
    formula: ["1P", "3M", "5P", "7m", "9m", "9A"],
    abbreviation: ["7b9#9"],
  },
  {
    name: "Major added flat 9th",
    formula: ["1P", "3M", "5P", "9m"],
    abbreviation: ["Maddb9"],
  },
  {
    name: "Major flat 5th",
    formula: ["1P", "3M", "5d"],
    abbreviation: ["Mb5", "M-5"],
  },
  {
    name: "Dominant 13th flat 5th",
    formula: ["1P", "3M", "5d", "6M", "7m", "9M"],
    abbreviation: ["13b5"],
  },
  {
    name: "Major 9th flat 5th",
    formula: ["1P", "3M", "5d", "7M", "9M"],
    abbreviation: ["M9b5"],
  },
  {
    name: "Dominant 9th flat 5th",
    formula: ["1P", "3M", "5d", "7m", "9M"],
    abbreviation: ["9b5", "9-5", "dom9b5"],
  },
  {
    name: "Dominant 7th no 5th",
    formula: ["1P", "3M", "7m"],
    abbreviation: ["7no5"],
  },
  {
    name: "Dominant 7th no 5th flat 13th",
    formula: ["1P", "3M", "7m", "13m"],
    abbreviation: ["7b13"],
  },
  {
    name: "Dominant 9th no 5th",
    formula: ["1P", "3M", "7m", "9M"],
    abbreviation: ["9no5"],
  },
  {
    name: "Dominant 13th no 5th",
    formula: ["1P", "3M", "7m", "9M", "13M"],
    abbreviation: ["13no5"],
  },
  {
    name: "Dominant 9th flat 13th",
    formula: ["1P", "3M", "7m", "9M", "13m"],
    abbreviation: ["9b13"],
  },
  {
    name: "Minor added 4th",
    formula: ["1P", "3m", "4P", "5P"],
    abbreviation: ["madd4"],
  },
  {
    name: "Minor sharp 5th",
    formula: ["1P", "3m", "5A"],
    abbreviation: ["m#5", "m+"],
  },
  {
    name: "Minor major 7th flat 6th",
    formula: ["1P", "3m", "5P", "6m", "7M"],
    abbreviation: ["mMaj7b6"],
  },
  {
    name: "Minor major 9th flat 6th",
    formula: ["1P", "3m", "5P", "6m", "7M", "9M"],
    abbreviation: ["mMaj9b6"],
  },
  {
    name: "Minor major 9th",
    formula: ["1P", "3m", "5P", "7M", "9M"],
    abbreviation: ["mMaj9"],
  },
  {
    name: "Minor 7th added 11th",
    formula: ["1P", "3m", "5P", "7m", "11P"],
    abbreviation: ["m7add11", "m7add4"],
  },
  {
    name: "Diminished major 7th",
    formula: ["1P", "3m", "5d", "7M"],
    abbreviation: ["oM7"],
  },
  {
    name: "Minor flat 6th major 7th",
    formula: ["1P", "3m", "6m", "7M"],
    abbreviation: ["mb6M7"],
  },
  {
    name: "Minor 7th sharp 5th",
    formula: ["1P", "3m", "6m", "7m"],
    abbreviation: ["m7#5"],
  },
  {
    name: "Minor 9th sharp 5th",
    formula: ["1P", "3m", "6m", "7m", "9M"],
    abbreviation: ["m9#5"],
  },
  {
    name: "Minor 11th sharp 5th",
    formula: ["1P", "3m", "6m", "7m", "9M", "11P"],
    abbreviation: ["m11A"],
  },
  {
    name: "Minor flat 6th flat 9th",
    formula: ["1P", "3m", "6m", "9m"],
    abbreviation: ["mb6b9"],
  },
  {
    name: "Minor 9th flat 5th",
    formula: ["1P", "3m", "5d", "7m", "9M"],
    abbreviation: ["m9b5", "min9b5", "m9-5"],
  },
  {
    name: "Minor 9th major 7th",
    formula: ["1P", "3m", "5P", "7M", "9M"],
    abbreviation: ["m9maj7", "min9maj7", "m9+7", "-9+7"],
  },
  {
    name: "Major 7th sharp 5th suspended 4th",
    formula: ["1P", "4P", "5A", "7M"],
    abbreviation: ["M7#5sus4"],
  },
  {
    name: "Major 9th sharp 5th suspended 4th",
    formula: ["1P", "4P", "5A", "7M", "9M"],
    abbreviation: ["M9#5sus4"],
  },
  {
    name: "Dominant 7th sharp 5th suspended 4th",
    formula: ["1P", "4P", "5A", "7m"],
    abbreviation: ["7#5sus4"],
  },
  {
    name: "Major 7th suspended 4th",
    formula: ["1P", "4P", "5P", "7M"],
    abbreviation: ["M7sus4"],
  },
  {
    name: "Major 9th suspended 4th",
    formula: ["1P", "4P", "5P", "7M", "9M"],
    abbreviation: ["M9sus4"],
  },
  {
    name: "13th suspended 4th",
    formula: ["1P", "4P", "5P", "7m", "9M", "13M"],
    abbreviation: ["13sus4", "13sus"],
  },
  {
    name: "Dominant 7th suspended 4th flat 9th flat 13th",
    formula: ["1P", "4P", "5P", "7m", "9m", "13m"],
    abbreviation: ["7sus4b9b13", "7b9b13sus4"],
  },
  {
    name: "4th quartal",
    formula: ["1P", "4P", "7m", "10m"],
    abbreviation: ["4", "quartal"],
  },
  {
    name: "11th flat 9th",
    formula: ["1P", "5P", "7m", "9m", "11P"],
    abbreviation: ["11b9"],
  },
];
