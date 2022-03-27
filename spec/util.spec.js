const stringUtil = require("../src/utils/string");

describe("Utility Test Suite", () => {
    describe("String Utils", () => {
        it("should split a string by capital letters", () => {
            const split = stringUtil.splitStringOnCapitalLetters('ABC');
            expect(split.length).toBe(3);
            expect(split[0]).toBe('A');
            expect(split[1]).toBe('B');
            expect(split[2]).toBe('C');
        });

        it("should preserve subscript syntax", () => {
            const split = stringUtil.splitStringOnCapitalLetters('CuO_2');
            expect(split.length).toBe(2);
            expect(split[0]).toBe('Cu');
            expect(split[1]).toBe('O_2');
        })
    });
});
