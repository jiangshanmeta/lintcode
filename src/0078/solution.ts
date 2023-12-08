export class Solution {
    /**
     * @param strs: A list of strings
     * @return: The longest common prefix
     */
    longestCommonPrefix (strs: string[]): string {
        if (strs.length === 0) {
            return '';
        }
        const MAX_INDEX = Math.min(...strs.map(str => str.length));
        let index = 0;
        while (index < MAX_INDEX) {
            const char = strs[0][index];
            let match = true;
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][index] !== char) {
                    match = false;
                    break;
                }
            }
            if (!match) {
                break;
            }
            index++;
        }
        return strs[0].slice(0, index);
    }
}
