/**
 * @param pattern: a string, denote pattern string
 * @param teststr: a string, denote matching string
 * @return: an boolean, denote whether the pattern string and the matching string match or not
 */
const wordPattern = function (pattern, teststr) {
    const a2b = {};
    const b2a = {};
    teststr = teststr.split(' ');
    for (let i = 0; i < pattern.length; i++) {
        if (a2b[pattern[i]] === undefined && b2a[teststr[i]] === undefined) {
            a2b[pattern[i]] = teststr[i];
            b2a[teststr[i]] = pattern[i];
        } else if (a2b[pattern[i]] !== teststr[i] || b2a[teststr[i]] !== pattern[i]) {
            return false;
        }
    }
    return true;
};
