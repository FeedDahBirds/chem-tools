const { equation, parseEquationPart } = require('../src/types/equation');

describe("Equation Test Suite", () => {
    describe("Equation Parser", () => {
        it(" - should parse part of a chemical equation to objects representing the equation", () => {
            const parsedEquation = parseEquationPart('CuCO_3 + H_2O');
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

        it(" - should parse a whole chemical equation an object representing an equation", () => {
            const _equation = equation("H_2 + O_2 -> H_2O");
            const { reactants, products } = _equation;
            expect(_equation.equation).toBe("H_2 + O_2 -> H_2O");
            expect(reactants.length).toBe(2);
            expect(products.length).toBe(1);

            const hydrogen = reactants[0][0];
            expect(hydrogen.element).toBe("H");
            expect(hydrogen.subscript).toBe(2);

            const oxygen = reactants[1][0];
            expect(oxygen.element).toBe("O");
            expect(oxygen.subscript).toBe(2);

            const water = products[0];
            expect(water.length).toBe(2);

            const waterHydrogen = water[0];
            const waterOxygen = water[1];
            
            expect(waterHydrogen.element).toBe("H");
            expect(waterHydrogen.subscript).toBe(2);
            expect(waterOxygen.element).toBe("O");
            expect(waterOxygen.subscript).toBe(1);
        });
    });
});
