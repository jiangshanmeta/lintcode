export class Solution {
    /**
     * @param a: A string
     * @param b: A string
     * @return: A string array
     */
    characterGrid (a: string, b: string): string[] {
        const map = new Map<string, number>();
        for (let i = 0; i < b.length; i++) {
            if (!map.has(b[i])) {
                map.set(b[i], i);
            }
        }
        const result = new Array<string[]>(b.length);
        for (let i = 0; i < result.length; i++) {
            result[i] = new Array<string>(a.length).fill('.');
        }

        for (let i = 0; i < a.length; i++) {
            if (map.has(a[i])) {
                const rowIndex = map.get(a[i])!;
                for (let j = 0; j < a.length; j++) {
                    result[rowIndex][j] = a[j];
                }
                for (let j = 0; j < b.length; j++) {
                    result[j][i] = b[j];
                }

                break;
            }
        }
        return result.map(item => item.join(''));
    }
}
