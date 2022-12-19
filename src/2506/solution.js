export class Solution {
    /**
     * @param s: A string with lowercase letters and parentheses
     * @return: A string which has been removed invalid parentheses
     */
    removeParentheses (s) {
        const indexStack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                indexStack.push(i);
            } else if (s[i] === ')') {
                if (indexStack.length && s[indexStack[indexStack.length - 1]] === '(') {
                    indexStack.pop();
                } else {
                    indexStack.push(i);
                }
            }
        }
        const result = [];
        let j = 0;
        for (let i = 0; i < s.length; i++) {
            if (j < indexStack.length && i === indexStack[j]) {
                j++;
                continue;
            }
            result.push(s[i]);
        }
        return result.join('');
    }
}
