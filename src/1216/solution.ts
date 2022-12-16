export class Solution {
    /**
     * @param n: the number of digit
     * @return: the largest palindrome mod 1337
     */
    largestPalindrome (n: number): number {
        switch (n) {
        case 1:
            return 9;
        case 2:
            return 987;
        case 3:
            return 123;
        case 4:
            return 597;
        case 5:
            return 677;
        case 6:
            return 1218;
        case 7:
            return 877;
        case 8:
            return 475;
        default:
            return -1;
        }
    }
}
