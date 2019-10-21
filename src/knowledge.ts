import { Interval } from "./Interval";

interface IIntervalKnowledge {
  [key: string]: {
    [key: number]: number;
  };
}

export interface IScaleKnowledge {
  formula: Array<Interval | string>;
  names: string[];
}

export const INTERVALS: IIntervalKnowledge = {
  A: {
    1: 1,
    2: 3,
    3: 5,
    4: 6,
    5: 8,
    6: 10,
    7: 12,
  },
  M: {
    2: 2,
    3: 4,
    6: 9,
    7: 11,
  },
  P: {
    1: 0,
    4: 5,
    5: 7,
    8: 12,
  },
  d: {
    2: 0,
    3: 2,
    4: 4,
    5: 6,
    6: 7,
    7: 9,
    8: 11,
  },
  m: {
    2: 1,
    3: 3,
    6: 8,
    7: 10,
  },
};

export const SCALES: IScaleKnowledge[] = [
  {
    formula: ["P1", "M2", "M3", "P4", "P5", "M6", "M7"],
    names: ["major", "ionian"],
  },
];
