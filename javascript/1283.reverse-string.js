/**
 * @param s: a string
 * @return: return a string
 */
const reverseString = function (s) {
    const result = [];
    let index = s.length - 1;
    while (index > -1) {
        result.push(s[index--]);
    }
    return result.join('');
};
