export class Solution {
    /**
     * @param a: a string
     * @param b: a string
     * @return: return an integer
     */
    repeatedStringMatch (a: string, b: string): number {
        const expand = Math.ceil(b.length / a.length);
        let c = a.repeat(expand);
        if (c.includes(b)) {
            return expand;
        }
        c += a;
        return c.includes(b) ? expand + 1 : -1;
    }
}
