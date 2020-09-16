/**
 * @param str: the input string
 * @return: The lower case string
 */
const toLowerCase = function (str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code > 64 && code < 91) {
            result.push(String.fromCharCode(code + 32));
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
};
