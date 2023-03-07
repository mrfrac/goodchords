# Goodchords

[![npm version](https://badge.fury.io/js/goodchords.svg)](https://badge.fury.io/js/goodchords)
![GitHub top language](https://img.shields.io/github/languages/top/mrfrac/goodchords?branch=master)
[![Build status](https://ci.appveyor.com/api/projects/status/i8h691mm5an60471?svg=true)](https://ci.appveyor.com/project/mrfrac/goodchords)
[![Coverage Status](https://coveralls.io/repos/github/mrfrac/goodchords/badge.svg?branch=master)](https://coveralls.io/github/mrfrac/goodchords?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mrfrac_goodchords&metric=code_smells)](https://sonarcloud.io/dashboard?id=mrfrac_goodchords)

> Music theory library

**The project is under development.**

## Usage

### Install

```bash
npm install --save goodchords
```

or

```bash
yarn add goodchords
```

### Import (ES6)

```js
import { Scale, Chord, Interval, Note } from "goodchords";
```

### Require (ES5)

```js
const { Scale, Chord, Interval, Note } = require("goodchords");
```

### Browser

Usage example:

```html
<html lang="en">
  <head>
    <title>Goodchords</title>
    <script src="https://cdn.jsdelivr.net/npm/goodchords@X/dist/goodchords.umd.js"></script>
    <script>
      alert(window.goodchords.Note.fromString("A4").frequency());
    </script>
  </head>
</html>
```

> Replace X with correct version

### API
#### Note

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

#### Interval

```js
const interval = new Interval(8, "P");
// or
const interval = Interval.fromString("8P"); // or P8
interval.semitones(); // 12
interval.isValid(); // true
interval.isCompound(); // false
Note.fromString("A4").transpose(interval).toString(); // A5
```

#### Scale

```js
const majorScaleFormula = ["P1", "M2", "M3", "P4", "P5", "M6", "M7"];
const scale = new Scale("A", majorScaleFormula);
scale.getNotes().map((note) => note.toString()); // ["A4", "B4", "C#5", "D5", "E5", "F#5", G#5", ]
const ionian = new Scale("C", "ionian");
ionian.getNotes().map((note) => note.toString()); // ["C4", "D4", "E4", "F4", "G4", "A4", "B4", ]
ionian.getChords(); // get chords for scale by degree
ionian.getScaleInfo(); // { name: "Major", formula: "<...>", altNames: ["Bilaval theta", "Ethiopian (A raray)", "Ionian", "Mela Dhirasankarabharana (29)", ]}
```

#### Chords

```js
const chord = new Chord("C", "m");
// or
const chord = Chord.fromString("Cm");
chord.getNotes(); // ["C4", "Eb4", "G4"]
```
