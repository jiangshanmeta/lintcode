export class Solution {
    /**
     * @param str: the original string
     * @param sublen: an integer array
     * @return: the new string
     */
    reformatString (str: string, sublen: number[]): string {
        let index = 0;
        const strs:string[] = [];
        for (const len of sublen) {
            strs.push(str.slice(index, index + len));
            index += len;
        }
        for (let i = 0; i < strs.length; i += 2) {
            if (i + 1 === strs.length) {
                break;
            }

            const b = strs[i + 1];
            strs[i + 1] = strs[i];
            strs[i] = b;
        }
        return strs.join('');
    }
}
