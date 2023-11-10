export class Solution {
    /**
     * @param s: a string with "(" and ")"
     * @return: return the score of the string
     */
    parenthesesScore (s: string): number {
        const stack = [0, ];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(0);
            } else {
                const l = stack.length;
                if (stack[l - 1] === 0) {
                    stack[l - 2] += 1;
                } else {
                    stack[l - 2] += 2 * stack[l - 1];
                }
                stack.pop();
            }
        }
        return stack[0];
    }
}
