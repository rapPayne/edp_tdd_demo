
export function romanToArabic(roman) {

    // I, V, X, L, C, D, M
    arabicLookup = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    // Loop through Roman and build an arabic number
    let toReturn = 0;

    for (let i = 0; i < roman.length; i++) {
        toReturn += arabicLookup[roman[i]];
    }

    return toReturn;

}