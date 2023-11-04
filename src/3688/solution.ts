export class Solution {
    /**
     * @param words: An array of words
     * @return: Is there only one character that is not the same
     */
    differByOne (words: string[]): boolean {
        const set = new Set<string>();
        for (const s of words) {
            const nss:string[] = [];
            for (let i = 0; i < s.length; i++) {
                const ns = s.slice(0, i) + s.slice(i + 1);
                if (set.has(ns)) {
                    return true;
                }
                nss.push(ns);
            }
            for (const ns of nss) {
                set.add(ns);
            }
        }
        return false;
    }
}
