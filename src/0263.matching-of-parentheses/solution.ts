export class Solution {
    /**
     * @param string_: A string
     * @return: whether the string is valid
     */
    matchParentheses (string_: string): boolean {
        let count = 0;
        for (let i = 0; i < string_.length; i++) {
            if (string_[i] === '(') {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                return false;
            }
        }
        return count === 0;
    }
}
