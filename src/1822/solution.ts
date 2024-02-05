export class Solution {
    /**
     * @param s: a string
     * @return:  return the minimum number of moves
     */
    minimumMoves (s: string): number {
        let res = 0;
        let index = 0;
        while (index < s.length) {
            const char = s[index++];
            let count = 1;
            while (index < s.length && s[index] === char) {
                index++;
                count++;
            }
            if (count > 2) {
                res += Math.floor(count / 3);
            }
        }
        return res;
    }
}
