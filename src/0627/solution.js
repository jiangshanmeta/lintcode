/**
 * @param s: a string which consists of lowercase or uppercase letters
 * @return: the length of the longest palindromes that can be built
 */
const longestPalindrome = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    const keys = Object.keys(map);
    let oddFlag = false;
    let count = 0;
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] % 2 === 0) {
            count += map[keys[i]];
        } else {
            count += map[keys[i]] - 1;
            oddFlag = true;
        }
    }

    return count + (oddFlag ? 1 : 0);
};
