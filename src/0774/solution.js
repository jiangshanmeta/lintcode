/**
 * @param s: a string represent DNA sequences
 * @return: all the 10-letter-long sequences
 */
const findRepeatedDna = function (s) {
    const map = {};
    const result = [];
    for (let i = 9; i < s.length; i++) {
        const str = s.substring(i - 9, i + 1);
        if (!map[str]) {
            map[str] = 1;
        } else if (map[str] === 1) {
            map[str] = 2;
            result.push(str);
        }
    }
    return result;
};
