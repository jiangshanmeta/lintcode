export class Solution {
    /**
     * @param s: the pearl sequences.
     * @param k: every k same pearls together will be removed.
     * @return: return the pearls after the game.
     */
    zumaGaming (s: string, k: number): string {
        const strs:string[] = [];
        const counts:number[] = [];
        for (let i = 0; i < s.length; i++) {
            if (strs.length === 0) {
                strs.push(s[i]);
                counts.push(1);
                continue;
            }
            if (s[i] === strs[strs.length - 1]) {
                counts[counts.length - 1]++;
                if (counts[counts.length - 1] === k) {
                    strs.pop();
                    counts.pop();
                }
            } else {
                strs.push(s[i]);
                counts.push(1);
            }
        }
        let result = '';
        for (let i = 0; i < strs.length; i++) {
            result += strs[i].repeat(counts[i]);
        }

        return result;
    }
}
