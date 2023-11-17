export class Solution {
    /**
     * @param s: an expression includes numbers, letters and brackets
     * @return: a string
     */
    expressionExpand (s: string): string {
        const counts = [1, ];
        const strs = ['', ];
        let index = 0;
        const nums = new Set('0123456789');
        while (index < s.length) {
            if (nums.has(s[index])) {
                const right = s.indexOf('[', index);
                const count = +s.slice(index, right);
                counts.push(count);
                strs.push('');
                index = right + 1;
            } else if (s[index] === ']') {
                const str = strs.pop()!;
                const count = counts.pop()!;
                strs[strs.length - 1] += str.repeat(count);
                index++;
            } else {
                strs[strs.length - 1] += s[index];
                index++;
            }
        }
        return strs[0];
    }
}
