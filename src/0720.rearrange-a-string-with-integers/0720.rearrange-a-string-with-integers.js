/**
 * @param str: a string containing uppercase alphabets and integer digits
 * @return: the alphabets in the order followed by the sum of digits
 */
const rearrange = function (str) {
    let sum = 0;
    let hasDigit = false;
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code > 64) {
            result.push(str[i]);
        } else {
            sum += (+str[i]);
            hasDigit = true;
        }
    }

    return `${result.sort().join('')}${hasDigit ? sum : ''}`;
};
