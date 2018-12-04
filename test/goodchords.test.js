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
        const circle = gChords.getCircle().map(item => [item[0].toString(), item[1].toString()])
        expect(circle).toEqual([
            [ "C", "Am" ],
            [ "G", "Em" ],
            [ "D", "Bm" ],
            [ "A", "Gbm" ],
            [ "E", "Dbm" ],
            [ "B", "Abm" ],
            [ "Gb", "Ebm" ],
            [ "Db", "Bbm" ],
            [ "Ab", "Fm" ],
            [ "Eb", "Cm" ],
            [ "Bb", "Gm" ],
            [ "F", "Dm" ]
        ]);
    });

    test("getGoodChords testing", () => {
        const gChords = new gc.GoodChords();
        let chords = gChords.getGoodChords("C").map(chord => chord.toString());
        expect(chords).toEqual(["C", "Am", "F", "Dm", "G", "Em"]);

        chords = gChords.getGoodChords("Eb", 1).map(chord => chord.toString());
        expect(chords).toEqual(["Gb", "Ebm", "B", "Abm", "Db", "Bbm"]);

        expect(() => gChords.getGoodChords("Z")).toThrow();
    });
});

describe("Chord testing", () => {
    test("Chord throws", () => {
        expect(() => new gc.Chord("Z")).toThrow();
    });
});
