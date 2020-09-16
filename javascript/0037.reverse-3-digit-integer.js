/**
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */
const reverseInteger = function (number) {
    let result = 0;
    while (number) {
        const digit = number % 10;
        result = result * 10 + digit;
        number = (number - digit) / 10;
    }

    return result;
};
