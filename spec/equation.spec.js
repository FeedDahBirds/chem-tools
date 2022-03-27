const equation = require('../src/types/equation');

describe("Equation Test Suite", () => {
    describe("Equation Parser", () => {
        it(" - should parse part of a chemical equation to objects representing the equation", () => {
            const parsedEquation = equation.parseEquationPart('CuCO_3 + H_2O');
            expect(parsedEquation.length).toBe(2);
            expect(parsedEquation[0].length).toBe(3);
            expect(parsedEquation[0][0].element).toBe('Cu');
            expect(parsedEquation[0][0].subscript).toBe(1);
            expect(parsedEquation[0][1].element).toBe('C');
            expect(parsedEquation[0][1].subscript).toBe(1);
            expect(parsedEquation[0][2].element).toBe('O');
            expect(parsedEquation[0][2].subscript).toBe(3);
            expect(parsedEquation[1].length).toBe(2);
            expect(parsedEquation[1][0].element).toBe('H');
            expect(parsedEquation[1][0].subscript).toBe(2);
            expect(parsedEquation[1][1].element).toBe('O');
            expect(parsedEquation[1][1].subscript).toBe(1);
        });
    });
});
