export class Solution {
    /**
     * @param s: An encoded string.
     * @param k: An index.
     * @return: Return the K-th letter (1 indexed) in the decoded string.
     */
    decodeAtIndex (s: string, k: number): string {
        let str = '';
        const nums = new Set(['2', '3', '4', '5', '6', '7', '8', '9', ]);
        for (let i = 0; i < s.length; i++) {
            if (nums.has(s[i])) {
                str = str.repeat(+s[i]);
                if (str.length >= k) {
                    return str[k - 1];
                }
            } else {
                str += s[i];
            }
        }
        return str[k - 1];
    }
}
