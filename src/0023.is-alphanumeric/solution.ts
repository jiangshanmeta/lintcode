export class Solution {
    /**
     * @param c: A character.
     * @return: The character is alphanumeric or not.
     */
    isAlphanumeric (c: string): boolean {
        const code = c.charCodeAt(0);
        if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
            return true;
        }
        return false;
    }
}
