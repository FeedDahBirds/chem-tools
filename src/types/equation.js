const strUtil = require('../utils/string');

const parseElement = (element) => {
    const split = element.split('_');
    return {
        element: split[0],
        subscript: parseInt(split[1],10) || 1
    }
}
/**
 * 
 * @param {*} equationPart 
 */
const parseEquationPart = (equationPart) => {
    return equationPart.split('+')
                        .map((str)=> str.trim())
                        .map((str)=> strUtil.splitStringOnCapitalLetters(str))
                        .map((arr)=> arr.map(parseElement));
}

/**
 * 
 * @param {string} equation
 * Assumed it will look something like 'A_2B + CD -> AD + CB' 
 */
const parseEquation = (equation) => {
    if(!equation) {
        throw new Error('No equation provided to parseEquation');
    }

    const equationSplitByReactantsAndProducts = equation.split('->');

    if(equationSplitByReactantsAndProducts.length < 2) {
        throw new Error('Please serparate products and reactants with an arrow (->)');
    }

    const rawReactants = equationSplitByReactantsAndProducts[0];
    const rawProducts = equationSplitByReactantsAndProducts[1];

    return {
        reactants: parseEquationPart(rawReactants),
        products: parseEquationPart(rawProducts)
    }

}

const equation = (equationString) => {
    const {reactants, products} = parseEquation(equationString);
    return {
        equation: equationString,
        reactants,
        products
    }
}

module.exports = {
    parseEquation,
    parseEquationPart,
    equation
}