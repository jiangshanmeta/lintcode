export class Solution {
    /**
     * @param s: the string
     * @return: Min Deletions To Obtain String in Right Format
     */
    minDeletionsToObtainStringInRightFormat (s: string): number {
        if (s.length === 0) {
            return 0;
        }

        const bCounts = new Array<number>(s.length).fill(0);
        bCounts[0] = s[0] === 'B' ? 1 : 0;
        for (let i = 1; i < s.length; i++) {
            if (s[i] === 'B') {
                bCounts[i] = bCounts[i - 1] + 1;
            } else {
                bCounts[i] = bCounts[i - 1];
            }
        }

        const aCounts = new Array<number>(s.length).fill(0);
        let c = s[s.length - 1] === 'A' ? 1 : 0;
        for (let i = aCounts.length - 2; i > -1; i--) {
            aCounts[i] = c;
            if (s[i] === 'A') {
                c++;
            }
        }
        let result = c;
        for (let i = 0; i < bCounts.length; i++) {
            result = Math.min(result, aCounts[i] + bCounts[i]);
        }

        return result;
    }
}
