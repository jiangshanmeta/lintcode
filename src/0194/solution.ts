export class Solution {
    /**
     * @param str: the string
     * @param dict: the dictionary
     * @return: return words which  are subsequences of the string
     */
    findWords (str: string, dict: string[]): string[] {
        const indexs = new Array<number>(dict.length).fill(0);
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < dict.length; j++) {
                if (indexs[j] === dict[j].length) {
                    continue;
                }
                if (str[i] === dict[j][indexs[j]]) {
                    indexs[j]++;
                }
            }
        }
        const result:string[] = [];
        for (let i = 0; i < indexs.length; i++) {
            if (indexs[i] === dict[i].length) {
                result.push(dict[i]);
            }
        }
        return result;
    }
}
