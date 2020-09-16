/**
 * @param num: the given number
 * @return: The base 7 string representation
 */
const convertToBase7 = function (num) {
    if (num < 0) {
        return `-${convertToBase7(-num)}`;
    } else if (num === 0) {
        return '0';
    }
    const stack = [];
    while (num > 0) {
        const digit = num % 7;
        stack.push(digit);
        num = (num - digit) / 7;
    }
    stack.reverse();
    return stack.join('');
};
