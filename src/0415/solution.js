/**
 * @param s: A string
 * @return: Whether the string is a valid palindrome
 */
const isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isConsider(s.charCodeAt(left))) {
            left++;
        }
        while (left < right && !isConsider(s.charCodeAt(right))) {
            right--;
        }
        if (left < right && s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isConsider (code) {
    return (code > 47 && code < 58) || (code > 96 && code < 123);
}
