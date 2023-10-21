export class Solution {
    /**
     * @param s: Source string with numeric.
     * @return: Whether s can be split into value-equal substrings.
     */
    isSplitable (s: string): boolean {
        let has2 = false;
        let index = 0;
        while (index < s.length) {
            const char = s[index++];
            let count = 1;
            while (index < s.length && s[index] === char) {
                count++;
                index++;
            }

            const mod = count % 3;
            if (mod === 1) {
                return false;
            }
            if (mod === 2) {
                if (has2) {
                    return false;
                }
                has2 = true;
            }
        }
        return has2;
    }
}
