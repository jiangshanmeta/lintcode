export class Solution {
    /**
     * @param str: the string need to be processed
     * @return: all the valid key-value pairs.
     */
    stringSeg (str: string): string[][] {
        const F = str[0];
        const S = str[1];
        return str.slice(2).split(F).map((item) => item.split(S)).filter(item => item.length === 2 && item[0] !== '' && item[1] !== '');
    }
}
