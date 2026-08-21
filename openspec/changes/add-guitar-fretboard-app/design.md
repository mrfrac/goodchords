## Context

The Nx workspace currently contains only the publishable TypeScript package `packages/goodchords`; `apps/` has no application. The package publicly exports `Note`, `Interval`, `Chord`, and `Scale`. `Scale` can build named scales, return correctly spelled scale notes and formulas, and test pitch-class membership, while `Note` supplies transposition and numeric pitch information. See `proposal.md` for motivation and `specs/guitar-fretboard/spec.md` for observable behavior.

The new application must not introduce Angular or browser concerns into the domain package. It must also participate in the workspace's Nx-managed lint, test, typecheck, and build workflows.

## Goals / Non-Goals

**Goals:**

- Establish a maintainable first Angular application in the workspace.
- Keep fretboard calculation separate from rendering so musical mappings can be unit tested without the DOM.
- Derive musical facts from `goodchords` while keeping instrument presets and presentation labels in the application.
- Preserve readable note markers and stable controls at desktop and phone widths.

**Non-Goals:**

- Custom per-string tuning editing or instruments with a variable string count.
- Audio playback, MIDI input, chord visualization, left-handed orientation, localization, persistence, or user accounts.
- Adding guitar-specific entities to the public API of `goodchords`.
- Exposing the complete scale catalog in the initial interface.

## Decisions

### Create a standalone Angular application with local feature ownership

Create the app under `apps/` using the Angular version compatible with the installed Nx 23 toolchain. Use standalone components and signal-based local state. Keep the small initial experience within one fretboard feature rather than creating additional Nx libraries before reuse boundaries exist.

Alternative considered: add shared UI and fretboard libraries immediately. This would add project boundaries without a second consumer and make the first application harder to navigate.

### Consume goodchords through the workspace package boundary

Declare `goodchords` as a workspace dependency and import only from its public entry point. A pure application adapter will:

1. Construct the selected `Scale` from the chosen root spelling and catalog name.
2. Transpose each preset's open `Note` by each fret's semitone distance.
3. Match generated pitch classes to `Scale.getNotes()` for visibility and selected-scale spelling.
4. Pair scale formulas with their generated notes to produce degree labels.

Instrument configuration, curated scale names, and user-facing label conversion remain application data because they are presentation and guitar concerns, not general music-theory primitives.

Alternative considered: reproduce pitch-class arithmetic in the Angular application. That would violate the requirement to exercise the local library and could diverge from its enharmonic spelling behavior.

### Represent the fretboard as a view model rendered with CSS Grid

The calculation adapter returns immutable rows containing string metadata and ordered fret cells from 0 through the configured fret count. Each cell carries its fret number, absolute note, optional selected-scale spelling, optional degree label, and root flag. The component renders rows with CSS Grid using stable cell dimensions.

Store tuning arrays from lowest to highest pitch, but render strings from highest to lowest pitch to match the common horizontal fretboard view. Render fret 0 as a distinct open-string column, with the nut separating it from fret 1.

Alternative considered: canvas or SVG drawing. CSS Grid provides accessible DOM labels, straightforward responsive scrolling, and simpler component tests for this essentially tabular interaction. Photorealistic fret spacing is less useful here than legible, consistent learning targets.

### Derive degree accidentals from interval semantics

Degree labels will be derived from each formula interval by comparing its semitone count with the major/perfect reference interval of the same diatonic degree. The difference becomes flats or sharps before the degree number, so minor third is `b3`, diminished fifth is `b5`, and perfect unison is `1`. This avoids treating scale array position as the degree, which would mislabel blues and other non-diatonic scales.

Alternative considered: maintain labels beside every curated scale. Static duplication would be easy to mistype and would weaken the connection to the selected `goodchords` scale formula.

### Use explicit presets and a curated scale mapping

Define four six-string presets with octave-qualified notes:

| Preset | Notes, low to high |
| --- | --- |
| Standard | E2 A2 D3 G3 B3 E4 |
| Drop D | D2 A2 D3 G3 B3 E4 |
| D Standard | D2 G2 C3 F3 A3 D4 |
| Open G | D2 G2 D3 G3 B3 D4 |

Map concise UI labels to the exact catalog names accepted by `goodchords`, including `Natural Minor` to `Minor (natural, pure)`, `Major Pentatonic` to `Pentatonic major`, and `Minor Pentatonic` to `Pentatonic minor`. Keep the remaining exact names for Major, Major blues, Minor blues, Dorian, and Mixolydian.

Offer common root spellings as distinct values: C, C-sharp, D-flat, D, E-flat, E, F, F-sharp, G-flat, G, A-flat, A, B-flat, and B. Distinct enharmonic values let the library generate notation appropriate to the user's chosen key.

### Make the fretboard locally scrollable on narrow screens

Use a compact full-width control band above the instrument. Controls form a multi-column layout when space permits and collapse to one or two columns on narrower screens. Keep string-name cells sticky at the inline start of a horizontally scrollable fretboard container, and maintain a minimum fret-cell width rather than compressing markers until they become illegible. The page itself must not acquire horizontal overflow.

Alternative considered: scale the entire fretboard to viewport width. At 22 or 24 frets this produces targets and text too small for practical use on phones.

### Use focused automated and visual verification

Unit-test preset data, fret enumeration, scale filtering, enharmonic spelling, degree conversion, and root detection. Component tests cover control updates and rendered label modes. During implementation, run Nx targets for both the existing package and the new app, then inspect desktop and phone screenshots from the running app for overflow, overlap, sticky labels, and complete fret access.

## Risks / Trade-offs

- [Risk] Some scales can produce uncommon spellings or double accidentals → Preserve the library's theoretically correct spellings and keep the initial scale/root list limited to common educational choices.
- [Risk] `Scale.getScales()` returns a broad catalog that could leak into the curated UI → Use an explicit label-to-catalog-name allowlist and fail fast in development if an expected entry is absent.
- [Risk] Transposing every cell on each control change creates repeated objects → Keep the maximum at six strings by 25 positions and compute one view model per state change; this bounded workload does not justify caching complexity.
- [Risk] Sticky string labels can obscure the first cells while scrolling → Reserve an explicit sticky grid column and verify it at representative mobile widths.
- [Trade-off] Equal-width fret cells are less physically realistic than decreasing fret widths → They improve scanning, label legibility, and predictable responsive behavior for an educational diagram.

## Migration Plan

1. Add Angular/Nx dependencies and scaffold the application without altering `goodchords` package exports.
2. Add the local workspace dependency and fretboard feature, then integrate its Nx targets into repository verification.
3. Confirm existing library build artifacts and tests remain unchanged, and verify the new application at desktop and mobile widths.

Rollback consists of removing the new application project, its workspace dependency entries, and Angular-specific workspace configuration; no persisted data or public library API migration is involved.
