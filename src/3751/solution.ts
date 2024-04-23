export class Solution {
    /**
     * @param s: A string containing only lowercase
     * @param count: Number of occurrences of the same letter
     * @return: Number of equal count substrings
     */
    equalCountSubstrings (s: string, count: number): number {
        let result = 0;
        const counts = new Array<number>(26).fill(0);
        const slidingWindow = (L:number, targetCount:number) => {
            let matchCount = 0;
            for (let i = 0; i < L - 1; i++) {
                const code = s.charCodeAt(i) - 97;
                counts[code]++;
                if (counts[code] === count) {
                    matchCount++;
                }
                if (counts[code] === count + 1) {
                    matchCount--;
                }
            }

            for (let i = L - 1; i < s.length; i++) {
                const code = s.charCodeAt(i) - 97;
                counts[code]++;
                if (counts[code] === count) {
                    matchCount++;
                }
                if (counts[code] === count + 1) {
                    matchCount--;
                }
                if (matchCount === targetCount) {
                    result++;
                }

                const code2 = s.charCodeAt(i - L + 1) - 97;
                counts[code2]--;
                if (counts[code2] === count - 1) {
                    matchCount--;
                }
                if (counts[code2] === count) {
                    matchCount++;
                }
            }
        };

        for (let i = 1; i <= 26; i++) {
            const L = i * count;
            if (L > s.length) {
                break;
            }
            slidingWindow(L, i);
            counts.fill(0);
        }

        return result;
    }
}
