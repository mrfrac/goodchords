export interface IAccidental {
  asString: string;
  index: number;
}

export interface INoteInfo {
  symbol: string;
  accidental: IAccidental;
  octave: number;
  frequency: number;
}
