export class Solution {
    /**
     * @param s: The string before remove vowels
     * @return: The string after remove vowels
     */
    removeVowels (s: string): string {
        return s.replace(/[aeiou]/g, '');
    }
}
