/**
 * @param s1: a string
 * @param s2: a string
 * @return: if s2 contains the permutation of s1
 */
const checkInclusion = function (s1, s2) {
    // 滑动窗口
    if (s1.length > s2.length) {
        return false;
    }
    const s1Chars = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Chars[s1.charCodeAt(i) - 97]++;
    }
    const windowChars = new Array(26).fill(0);
    for (let i = 0; i < s1.length - 1; i++) {
        windowChars[s2.charCodeAt(i) - 97]++;
    }

    for (let i = s1.length - 1; i < s2.length; i++) {
        windowChars[s2.charCodeAt(i) - 97]++;
        let flag = true;
        for (let i = 0; i < 26; i++) {
            if (s1Chars[i] !== windowChars[i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }
        windowChars[s2.charCodeAt(i - s1.length + 1) - 97]--;
    }
    return false;
};
