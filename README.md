# Goodchords :musical_note:

![GitHub top language](https://img.shields.io/github/languages/top/mrfrac/goodchords?branch=master)
[![Build Status](https://travis-ci.org/mrfrac/goodchords.svg?branch=master)](https://travis-ci.org/mrfrac/goodchords)
[![Coverage Status](https://coveralls.io/repos/github/mrfrac/goodchords/badge.svg?branch=master)](https://coveralls.io/github/mrfrac/goodchords?branch=master)
[![dependencies Status](https://david-dm.org/mrfrac/goodchords/master/status.svg)](https://david-dm.org/mrfrac/goodchords/master)
[![devDependencies Status](https://david-dm.org/mrfrac/goodchords/master/dev-status.svg)](https://david-dm.org/mrfrac/goodchords/master?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Music theory library

:hammer: **The project is under development.** :hammer:

## Usage

### Note

```js
const note = new Note("A", "#", 4);
// or
const note = Note.fromString("A#4");
note.transpose("M3").toString(); // C##5
note.toString(); // A#4
note.frequency(); // 466.16
note.distanceTo("A#5"); // 12
note.number(); // 58
```

### Interval

```js
const interval = new Interval(8, "P");
// or
const interval = Interval.fromString("8P"); // or P8
interval.semitones(); // 12
interval.isValid(); // true
interval.is_compound(); // false
Note.fromString("A4").transpose(interval).toString(); // A5
```

### Scale

```js
const majorScaleFormula = ["P1", "M2", "M3", "P4", "P5", "M6", "M7"];
const scale = new Scale("A", majorScaleFormula);
scale.getNotes().map((note) => note.toString()); // ["A4", "B4", "C#5", "D5", "E5", "F#5", G#5",]
```
