## Purpose

Provide guitar learners with a configurable, responsive fretboard that reveals the positions and functions of notes in a selected musical scale.

## ADDED Requirements

### Requirement: Application presents an English guitar-learning workspace
The system SHALL present the guitar fretboard and all controls, labels, empty states, and validation messages in English.

#### Scenario: Initial application view
- **WHEN** the user opens the application
- **THEN** the system displays a configured guitar fretboard and English-language controls without requiring setup

### Requirement: User can select a tuning preset
The system SHALL offer Standard, Drop D, D Standard, and Open G six-string tuning presets and SHALL update every string's open note and fretted notes when the selection changes.

#### Scenario: Select Drop D
- **WHEN** the user selects the Drop D preset
- **THEN** the system configures the strings to D2, A2, D3, G3, B3, and E4 from lowest to highest pitch and recalculates the fretboard

#### Scenario: Select Open G
- **WHEN** the user selects the Open G preset
- **THEN** the system configures the strings to D2, G2, D3, G3, B3, and D4 from lowest to highest pitch and recalculates the fretboard

### Requirement: User can choose the displayed fret count
The system SHALL let the user select an inclusive fret count from 12 through 24 and SHALL display the open-string position as fret 0 in addition to the selected number of fretted positions.

#### Scenario: Change fret count
- **WHEN** the user changes the fret count from 22 to 15
- **THEN** the system displays fret 0 and frets 1 through 15 for every string

### Requirement: User can select a root note and educational scale
The system SHALL let the user select a root note and one of Major, Natural Minor, Major Pentatonic, Minor Pentatonic, Major Blues, Minor Blues, Dorian, or Mixolydian, and SHALL recalculate highlighted positions after either selection changes.

#### Scenario: Select A Natural Minor
- **WHEN** the user selects A as the root and Natural Minor as the scale
- **THEN** the system identifies A, B, C, D, E, F, and G pitch classes as members of the selected scale across the fretboard

#### Scenario: Select an enharmonic root spelling
- **WHEN** the user selects a root spelling such as F-sharp or G-flat
- **THEN** the system uses the selected spelling when deriving and displaying scale note names

### Requirement: Fretboard shows only selected-scale notes
The system SHALL render a position for every string and fret, SHALL display a marker only when the position belongs to the selected scale, and SHALL visually distinguish root-note markers from other scale-note markers.

#### Scenario: Position is outside the scale
- **WHEN** a fret position's pitch class is not part of the selected scale
- **THEN** the position remains visible without a note marker

#### Scenario: Position is the scale root
- **WHEN** a fret position matches the selected root pitch class
- **THEN** its marker uses the dedicated root-note treatment

### Requirement: User can choose note or scale-degree labels
The system SHALL provide Notes and Degrees label modes. Notes mode SHALL use the note spelling derived from the selected scale, while Degrees mode SHALL use interval-derived labels such as 1, 2, b3, 3, 4, b5, 5, 6, b7, and 7 as applicable to that scale.

#### Scenario: Display note labels
- **WHEN** the user selects Notes mode for C Major
- **THEN** scale markers are labelled C, D, E, F, G, A, and B according to their pitch classes

#### Scenario: Display degree labels
- **WHEN** the user selects Degrees mode for A Natural Minor
- **THEN** scale markers are labelled 1, 2, b3, 4, 5, b6, and b7 according to their function in the scale

### Requirement: Music-theory results come from goodchords
The system SHALL use the local workspace `goodchords` package to construct the selected scale, transpose open-string notes across frets, preserve scale note spelling, and determine scale membership.

#### Scenario: Recalculate the fretboard
- **WHEN** tuning, root note, scale, or fret count changes
- **THEN** the displayed note positions reflect results produced from `goodchords` music-theory entities

### Requirement: Fretboard remains usable across viewport sizes
The system SHALL adapt its controls and fretboard presentation for desktop and mobile viewports without overlapping or clipping interactive controls. On viewports too narrow for the full fretboard, the fretboard SHALL scroll horizontally while string identification remains visible.

#### Scenario: Use the application on a narrow phone viewport
- **WHEN** the viewport cannot contain all selected frets at a legible size
- **THEN** controls reflow into the available width and the user can horizontally scroll through all frets while retaining string context

#### Scenario: Use the application on a wide viewport
- **WHEN** the viewport can contain the configured fretboard
- **THEN** the system presents the controls and fretboard without unnecessary horizontal page scrolling
