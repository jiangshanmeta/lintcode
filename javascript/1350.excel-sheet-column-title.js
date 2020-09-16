/**
 * @param n: a integer
 * @return: return a string
 */
const convertToTitle = function (n) {
    const stack = [];
    while (n) {
        const digit = (n - 1) % 26;
        stack.push(String.fromCharCode(digit + 65));
        n = (n - digit - 1) / 26;
    }
    return stack.reverse().join('');
};
