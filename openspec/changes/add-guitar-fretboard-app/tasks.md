## 1. Angular Workspace Setup

- [x] 1.1 Add the Angular and Nx Angular dependencies compatible with Nx 23, install them through npm, and verify `npx nx report` recognizes the Angular plugin without version mismatch warnings.
- [x] 1.2 Generate a standalone Angular application named `fretboard` under `apps/`, configure its lint, test, typecheck, build, and serve targets, and verify `npx nx show project fretboard` lists the expected targets.
- [x] 1.3 Declare the application's workspace dependency on `goodchords`, keep imports on the package's public entry point, and verify an application typecheck resolves `Note`, `Interval`, and `Scale` from the local package.
- [x] 1.4 Update root npm scripts or Nx configuration so repository lint, test, typecheck, and build verification includes both projects, and verify Nx's project graph retains a one-way `fretboard` to `goodchords` dependency.

## 2. Fretboard Domain Adapter

- [x] 2.1 Define typed Standard, Drop D, D Standard, and Open G presets plus the curated root and scale options, and verify unit tests assert every preset's octave-qualified string notes and each UI label's exact `goodchords` catalog mapping.
- [x] 2.2 Implement interval-to-degree label conversion from `goodchords` interval semantics, and verify unit tests cover natural, flat, sharp, and diminished degrees including `1`, `b3`, `#4`, and `b5`.
- [x] 2.3 Implement the pure fretboard view-model builder using `Note`, `Interval`, and `Scale` from `goodchords`, and verify unit tests cover fret 0, inclusive fret enumeration, six-string ordering, scale membership, root detection, and selected-scale note spelling.
- [x] 2.4 Add focused cases for C Major, A Natural Minor, F-sharp/G-flat enharmonic selection, and a blues scale with multiple chromatic degrees, and verify the fretboard adapter test target passes through Nx.

## 3. Angular Experience

- [x] 3.1 Build the English configuration controls for tuning, fret count from 12 through 24, root, curated scale, and Notes/Degrees mode with the agreed defaults, and verify component tests observe state and view-model updates after each control changes.
- [x] 3.2 Build the horizontal six-string fretboard with fret numbers, a distinct open-string column and nut, empty non-scale positions, visible scale markers, and emphasized root markers, and verify component tests cover marker filtering and both label modes.
- [x] 3.3 Add accessible control labels, selected-state semantics, fret marker descriptions, keyboard operation, and visible focus styling, and verify representative controls and markers have meaningful accessible names in component tests.
- [x] 3.4 Style the interface as a polished guitar-learning workspace with stable grid dimensions and no instructional feature-description copy, and verify dynamic labels and all values fit their controls at the supported fret counts.

## 4. Responsive Behavior

- [x] 4.1 Implement responsive control reflow and a fretboard-owned horizontal scroll region with sticky string labels and no page-level horizontal overflow, and verify the layout at representative phone, tablet, and desktop viewport widths.
- [x] 4.2 Verify on a narrow phone viewport that all controls remain reachable, string context stays visible during fretboard scrolling, and fret 24 can be reached without overlap or clipped note labels.
- [x] 4.3 Verify on a wide desktop viewport that the fretboard is correctly framed, the next content remains coherent, and there is no unnecessary horizontal page scrolling.

## 5. Repository Verification

- [x] 5.1 Run the Nx-managed lint, test, typecheck, and build targets for `goodchords` and `fretboard`, and resolve all failures without changing the public exports or package exports of `goodchords`.
- [x] 5.2 Start the Angular development server, inspect the completed application with desktop and mobile screenshots, and verify rendered assets, controls, note markers, scrolling, and responsive layout match the specification.
