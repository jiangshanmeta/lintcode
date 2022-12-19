export class Solution {
    /**
     * @param s: A string containing only uppercase and lowercase letters
     * @return: Judge whether it can become a palindrome
     */
    isPalindrome (s: string): boolean {
        const counts = new Array(52).fill(0);
        for (let i = 0; i < s.length; i++) {
            const code = s.charCodeAt(i);
            if (code < 97) {
                counts[code - 65]++;
            } else {
                counts[code - 97]++;
            }
        }
        let hasOdd = false;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] & 1) {
                if (hasOdd) {
                    return false;
                }
                hasOdd = true;
            }
        }
        return true;
    }
}
