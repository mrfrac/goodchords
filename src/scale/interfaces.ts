import { Interval } from "../interval";

export interface IScale {
  name: string;
  formula: Array<string | Interval>;
  altNames?: string[];
}
