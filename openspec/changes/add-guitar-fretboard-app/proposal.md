## Why

Goodchords currently exposes music-theory primitives without an interactive application where musicians can explore those concepts on an instrument. A responsive guitar fretboard will make the local `goodchords` package useful as a visual learning tool while establishing the first application in the Nx workspace.

## What Changes

- Add an English-language Angular application that visualizes notes across a guitar fretboard.
- Let users select a guitar tuning from a small preset collection and choose the displayed fret count.
- Let users select a root note and an educational scale from a curated subset of scales supported by `goodchords`.
- Show only fret positions belonging to the selected scale, with a switch between note-name and scale-degree labels and distinct root-note styling.
- Provide a responsive layout that remains usable on narrow screens through compact controls and horizontal fretboard scrolling.
- Use the workspace `goodchords` package for note transposition, scale construction, note spelling, and scale membership rather than duplicating music-theory logic in the application.

## Capabilities

### New Capabilities

- `guitar-fretboard`: Interactive guitar fretboard configuration and responsive visualization of notes from a selected scale.

### Modified Capabilities

None.

## Impact

- Adds a new Angular application under `apps/` and the Angular/Nx dependencies and targets needed to build, test, lint, typecheck, and serve it.
- Adds a workspace dependency from the application to `packages/goodchords`; the domain library remains independent from Angular and UI code.
- Extends root workspace scripts or Nx project configuration as needed to operate the new application without changing the existing public exports or package exports of `goodchords`.
