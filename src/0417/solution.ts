export class Solution {
    /**
     * @param s: the string that represents a number
     * @return: whether the string is a valid number
     */
    isNumber (s: string): boolean {
        return s.trim().length > 0 && !Number.isNaN(+s);
    }
}
