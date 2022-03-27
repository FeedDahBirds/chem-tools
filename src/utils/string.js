const splitStringOnCapitalLetters = (str) => {
    return str.split(/(?=[A-Z])/);
}

module.exports = {
    splitStringOnCapitalLetters
}