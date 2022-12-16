export class Solution {
    /**
     * @param s: string S
     * @param t: string T
     * @return: whether S can convert to T
     */
    canConvert (s: string, t: string): boolean {
        if (s === null || t === null) {
            return false;
        }
        let i = 0;
        let j = 0;
        while (j < t.length) {
            let found = false;
            while (i < s.length) {
                if (s[i] === t[j]) {
                    found = true;
                    i++;
                    break;
                } else {
                    i++;
                }
            }
            if (found) {
                j++;
            } else {
                return false;
            }
        }
        return true;
    }
}
