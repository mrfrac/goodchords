const gg = require("../dist/goodchords.cjs");

describe("Raw scales testing", () => {
    test("Major scale testing", () => {
        expect(gg.getMajorRawScale("C")).toEqual(["C", "D", "E", "F", "G", "A", "B", "C"]);
    });

    test("Minor scale testing", () => {
        expect(gg.getMinorRawScale("A")).toEqual(["A", "B", "C", "D", "E", "F", "G", "A"]);
    });

    test("Wrong chord", () => {
        expect(() => gg.getMajorRawScale("Z")).toThrow();
    });
});
