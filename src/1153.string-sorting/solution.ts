export class Solution {
    /**
     * @param s: string
     * @return: sort string in lexicographical order
     */
    sorting (s: string): string {
        return s.split(',').sort().join(',');
    }
}
