/**
 * @param s: a string
 * @return: reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order
 */
const reverseWords = function (s) {
    const result = [];
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            while (stack.length) {
                result.push(stack.pop());
            }
            result.push(s[i]);
        } else {
            stack.push(s[i]);
        }
    }

    while (stack.length) {
        result.push(stack.pop());
    }

    return result.join('');
};
