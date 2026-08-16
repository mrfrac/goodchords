export type TIntervalQuality = "P" | "M" | "m" | "A" | "d";

type TIntervalKnowledge = {
  [key in TIntervalQuality]: {
    [key: number]: number;
  };
};

export const INTERVALS: TIntervalKnowledge = {
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
