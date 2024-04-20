export class Solution {
    /**
     * @param phrases: A list of phrases
     * @return: A list of new phrases
     */
    beforeAndAfterPuzzles (phrases: string[]): string[] {
        const phrased = phrases.map(item => item.split(' '));
        const lastIndexMap = new Map<string, number[]>();
        for (let i = 0; i < phrased.length; i++) {
            const last = phrased[i][phrased[i].length - 1];
            if (lastIndexMap.has(last)) {
          lastIndexMap.get(last)!.push(i);
            } else {
                lastIndexMap.set(last, [i, ]);
            }
        }
        const s = new Set();
        const res:string[] = [];
        for (let i = 0; i < phrased.length; i++) {
            const first = phrased[i][0];
            if (lastIndexMap.has(first)) {
                const indexs = lastIndexMap.get(first)!;
                for (const j of indexs) {
                    if (i === j) {
                        continue;
                    }
                    const newStr = [...phrased[j].slice(0), ...phrased[i].slice(1), ].join(' ');
                    if (s.has(newStr)) {
                        continue;
                    }
                    s.add(newStr);
                    res.push(newStr);
                }
            }
        }

        return res.sort();
    }
}
