/**
 * @param strs: A list of strings
 * @return: A list of strings
 */
const anagrams = function (strs) {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('');
        (map[sortedStr] || (map[sortedStr] = [])).push(strs[i]);
    }
    const result = [];
    const keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]].length === 1) {
            continue;
        }
        result.push(...map[keys[i]]);
    }
    return result;
};
