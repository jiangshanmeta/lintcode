/**
 * @param S: the given string
 * @return: the minimum number of parentheses we must add
 */
const minAddToMakeValid = function (S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === ')' && stack.length && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    return stack.length;
};
