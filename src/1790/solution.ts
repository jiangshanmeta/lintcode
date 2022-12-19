export class Solution {
    /**
     * @param str: An array of char
     * @param left: a left offset
     * @param right: a right offset
     * @return: return a rotate string
     */
    rotateString2 (str: string, left: number, right: number): string {
        let move = (right - left) % str.length;
        if (move < 0) {
            move += str.length;
        }

        return str.slice(str.length - move) + str.slice(0, str.length - move);
    }
}
