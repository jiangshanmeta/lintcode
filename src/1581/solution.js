export class Solution {
    /**
     * @param wordDict: a dictionary
     * @param s: a string
     * @return: the longest one existed in the given dictionary
     */
    longestSubsequence (wordDict, s) {
        let res = '';
        for (const word of wordDict) {
            let indexW = 0;
            let indexS = 0;
            while (indexW < word.length && indexS < s.length) {
                if (word[indexW] !== s[indexS]) {
                    indexS++;
                } else {
                    indexS++;
                    indexW++;
                }
            }

            if (indexW === word.length && (res === '' || word.length > res.length || (word.length === res.length && word < res))) {
                res = word;
            }
        }
        return res;
    }
}
