export class Solution {
    /**
     * @param a: A string
     * @param b: A string
     * @return: if string A contains all of the characters in B return true else return false
     */
    compareStrings (a: string, b: string): boolean {
        const counts = new Array<number>(26).fill(0);
        for (let i = 0; i < a.length; i++) {
            counts[a.charCodeAt(i) - 65]++;
        }
        for (let i = 0; i < b.length; i++) {
            counts[b.charCodeAt(i) - 65]--;
        }
        return counts.every(item => item >= 0);
    }
}
