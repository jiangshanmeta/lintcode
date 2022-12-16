/**
 * @param s: A string
 * @return: whether the string is a valid parentheses
 */
const isValidParentheses = function (s) {
    const stack = [];
    const left = {
        '[': true,
        '{': true,
        '(': true,
    };
    const right2left = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    for (let i = 0; i < s.length; i++) {
        if (left[s[i]]) {
            stack.push(s[i]);
        } else if (stack.length && stack[stack.length - 1] === right2left[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
