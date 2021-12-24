module.exports = function toReadable(number) {
    const num = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number < 100) {
        if (number < 20 || number % 10 === 0) {
            return num[number];
        } else {
            return num[number - number.toString().slice(-1)] + ' ' + num[number.toString().slice(-1)];
        }
    } else {
        if (number.toString().slice(-2) < 20 && +number.toString().slice(-2) !== 0 && number.toString().slice(-2) % 10) {
            return num[number.toString()[0]] + ' hundred ' + num[(number - (number.toString()[0] * 100))];
        } else if (number.toString().slice(-2) % 10 === 0 && +number.toString().slice(-2) !== 0) {
            return num[number.toString()[0]] + ' hundred ' + num[(number - (number.toString()[0] * 100))];
        } else if (number % 100 === 0) {
            return num[number.toString()[0]] + ' hundred';
        } else {
            return num[number.toString()[0]] + ' hundred ' + num[number.toString().slice(-2) - number.toString().slice(-1)] + ' ' + num[number.toString().slice(-1)];
        }
    }
};
