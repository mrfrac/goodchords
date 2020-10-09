export interface IAccidental {
  asString: string;
  index: number;
}

export interface INoteInfo {
  note: string;
  octave: number;
  accidentals: IAccidental;
}
