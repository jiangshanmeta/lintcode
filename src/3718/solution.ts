export class Solution {
    /**
     * @param features: A string array
     * @param responses: A string array
     * @return: Array of sorted features
     */
    sortFeatures (features: string[], responses: string[]): string[] {
        const countMap = new Map<string, number>();
        for (const k of features) {
            countMap.set(k, 0);
        }
        // 贵lintcode不支持 for of访问set
        const unique = (ss:string[]) => {
            const res = [];
            const set = new Set<string>();
            for (const s of ss) {
                if (set.has(s)) {
                    continue;
                }
                set.add(s);
                res.push(s);
            }
            return res;
        };
        for (const res of responses) {
            const set = unique(res.split(' '));
            for (const s of set) {
                if (!countMap.has(s)) {
                    continue;
                }
                countMap.set(s, countMap.get(s)! + 1);
            }
        }
        features.sort((a, b) => countMap.get(b)! - countMap.get(a)!);
        return features;
    }
}
