/**
 * @param s: a string
 * @return: an integer
 */
const lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    const charIndexMap = [];
    charIndexMap[s[0]] = 0;
    let startIndex = 0;
    let result = 1;
    for (let i = 1; i < s.length; i++) {
        if (charIndexMap[s[i]] !== undefined && charIndexMap[s[i]] >= startIndex) {
            startIndex = charIndexMap[s[i]] + 1;
        }
        charIndexMap[s[i]] = i;
        result = Math.max(result, i - startIndex + 1);
    }
    return result;
};
