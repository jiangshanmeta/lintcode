export class Solution {
    /**
     * @param s:
     * @return: return a string
     */
    frequencySort (str: string): string {
        const map:Record<string, number> = {};
        for (let i = 0; i < str.length; i++) {
            const s = str[i];
            if (map[s]) {
                map[s]++;
            } else {
                map[s] = 1;
            }
        }
        return Object.entries(map).sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            }
            return a[0] < b[0] ? -1 : 1;
        }).map(([item, count, ]) => {
            return item.repeat(count);
        }).join('');
    }
}
