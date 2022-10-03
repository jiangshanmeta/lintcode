/**
 * @param s: a string
 * @return: return List[str]
 */
const findRepeatedDnaSequences = function (s) {
    const map = {};
    const result = [];
    for (let i = 9; i < s.length; i++) {
        const sub = s.substring(i - 9, i + 1);
        if (map[sub] === undefined) {
            map[sub] = 1;
        } else if (map[sub] === 1) {
            map[sub]++;
            result.push(sub);
        }
    }

    return result.sort();
};
