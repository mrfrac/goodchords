import { Component, computed, signal } from "@angular/core";
import {
  FRET_COUNTS,
  LabelMode,
  ROOT_OPTIONS,
  SCALE_OPTIONS,
  TUNING_PRESETS,
} from "./fretboard/fretboard.data";
import { buildFretboard } from "./fretboard/fretboard.adapter";

@Component({
  selector: "gc-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly tuningPresets = TUNING_PRESETS;
  protected readonly rootOptions = ROOT_OPTIONS;
  protected readonly scaleOptions = SCALE_OPTIONS;
  protected readonly fretCounts = FRET_COUNTS;

  protected readonly tuningId = signal("standard");
  protected readonly root = signal("C");
  protected readonly scaleId = signal("major");
  protected readonly fretCount = signal(22);
  protected readonly labelMode = signal<LabelMode>("notes");

  protected readonly selectedTuning = computed(
    () =>
      this.tuningPresets.find((preset) => preset.id === this.tuningId()) ??
      this.tuningPresets[0],
  );

  protected readonly selectedScale = computed(
    () =>
      this.scaleOptions.find((scale) => scale.id === this.scaleId()) ??
      this.scaleOptions[0],
  );

  protected readonly fretboard = computed(() =>
    buildFretboard({
      tuning: this.selectedTuning(),
      fretCount: this.fretCount(),
      root: this.root(),
      scaleName: this.selectedScale().catalogName,
    }),
  );

  protected readonly title = computed(
    () => `${this.root()} ${this.selectedScale().label}`,
  );

  protected setTuning(event: Event): void {
    this.tuningId.set(this.selectValue(event));
  }

  protected setRoot(event: Event): void {
    this.root.set(this.selectValue(event));
  }

  protected setScale(event: Event): void {
    this.scaleId.set(this.selectValue(event));
  }

  protected setFretCount(event: Event): void {
    const value = Number(this.selectValue(event));
    if (FRET_COUNTS.includes(value)) {
      this.fretCount.set(value);
    }
  }

  protected setLabelMode(mode: LabelMode): void {
    this.labelMode.set(mode);
  }

  protected isPositionMarker(fret: number): boolean {
    return [3, 5, 7, 9, 12, 15, 17, 19, 21, 24].includes(fret);
  }

  private selectValue(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement).value;
  }
}
