export class Solution {
    /**
     * @param n: An integer.
     * @return: A string list.
     */
    printX (n: number): string[] {
        const result:string[] = [];
        for (let i = 0; i < n; i++) {
            const row = new Array<string>(n).fill(' ');
            row[i] = 'X';
            row[n - i - 1] = 'X';
            result.push(row.join(''));
        }

        return result;
    }
}
