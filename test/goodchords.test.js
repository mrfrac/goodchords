const gc = require("../dist/goodchords.cjs");

describe("Raw scales testing", () => {
    test("Major scale testing", () => {
        expect(gc.getMajorRawScale("C")).toEqual(["C", "D", "E", "F", "G", "A", "B", "C"]);
    });

    test("Minor scale testing", () => {
        expect(gc.getMinorRawScale("A")).toEqual(["A", "B", "C", "D", "E", "F", "G", "A"]);
    });

    test("Wrong chord", () => {
        expect(() => gc.getMajorRawScale("Z")).toThrow();
    });
});

describe("GoodChords class testing", () => {
    test("Raw circle of fifths", () => {
        const gChords = new gc.GoodChords();
        expect(gChords.getCircle()).toEqual([
            [ "C", "A" ],
            [ "G", "E" ],
            [ "D", "B" ],
            [ "A", "Gb" ],
            [ "E", "Db" ],
            [ "B", "Ab" ],
            [ "Gb", "Eb" ],
            [ "Db", "Bb" ],
            [ "Ab", "F" ],
            [ "Eb", "C" ],
            [ "Bb", "G" ],
            [ "F", "D" ]
        ]);
    });
});
