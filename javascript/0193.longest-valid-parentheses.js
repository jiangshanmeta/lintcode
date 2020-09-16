/**
 * @param s: a string
 * @return: return a integer
 */
const longestValidParentheses = function (s) {
    const parenthesesStack = [];
    const indexStack = [-1, ];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' && parenthesesStack.length && parenthesesStack[parenthesesStack.length - 1] === '(') {
            parenthesesStack.pop();
            indexStack.pop();
        } else {
            parenthesesStack.push(s[i]);
            indexStack.push(i);
        }
    }
    indexStack.push(s.length);
    let max = 0;
    for (let i = 0; i < indexStack.length - 1; i++) {
        max = Math.max(max, indexStack[i + 1] - indexStack[i] - 1);
    }
    return max;
};
