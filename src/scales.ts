import { Interval } from "./classes/interval";

export interface IScaleKnowledge {
  formula: Array<Interval | string>;
  names: string[];
}

export const SCALES: IScaleKnowledge[] = [
  {
    formula: ["P1", "M2", "M3", "P4", "P5", "M6", "M7"],
    names: ["major", "ionian"],
  },
];
