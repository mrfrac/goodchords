import { TestBed } from "@angular/core/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./app";

describe("App", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it("renders the configured fretboard in English", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector("h1")?.textContent).toContain("C Major");
    expect(compiled.querySelectorAll(".string-row")).toHaveLength(6);
    expect(compiled.querySelectorAll(".fret-number")).toHaveLength(23);
    expect(compiled.textContent).toContain("Standard tuning");
  });

  it("updates tuning, fret count, root, and scale from controls", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const root = fixture.nativeElement.querySelector(
      '[data-testid="root-select"]',
    ) as HTMLSelectElement;
    root.value = "A";
    root.dispatchEvent(new Event("change"));

    const scale = fixture.nativeElement.querySelector(
      '[data-testid="scale-select"]',
    ) as HTMLSelectElement;
    scale.value = "natural-minor";
    scale.dispatchEvent(new Event("change"));

    const tuning = fixture.nativeElement.querySelector(
      '[data-testid="tuning-select"]',
    ) as HTMLSelectElement;
    tuning.value = "drop-d";
    tuning.dispatchEvent(new Event("change"));

    const frets = fixture.nativeElement.querySelector(
      '[data-testid="fret-count-input"]',
    ) as HTMLInputElement;
    frets.value = "15";
    frets.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "A Natural Minor",
    );
    expect(compiled.textContent).toContain("Drop D tuning");
    expect(compiled.querySelectorAll(".fret-number")).toHaveLength(16);
  });

  it("switches between note and degree markers with accessible names", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstMarker = compiled.querySelector(".note-marker");
    expect(firstMarker?.textContent?.trim()).toBe("E");
    expect(firstMarker?.getAttribute("aria-label")).toContain(
      "String 1, fret 0: E, degree 3",
    );

    const degreeButton = compiled.querySelectorAll<HTMLButtonElement>(
      ".segmented__button",
    )[1];
    expect(degreeButton).toBeDefined();
    degreeButton.dispatchEvent(new Event("click", { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector(".note-marker")?.textContent?.trim()).toBe(
      "3",
    );
    expect(degreeButton.getAttribute("aria-pressed")).toBe("true");
  });

  it("hides positions outside the scale and emphasizes roots", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll(".fret-cell").length).toBe(6 * 23);
    expect(compiled.querySelectorAll(".note-marker").length).toBeLessThan(
      6 * 23,
    );
    expect(
      compiled.querySelectorAll(".note-marker--root").length,
    ).toBeGreaterThan(0);
  });
});
