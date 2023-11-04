const backTracking = (parsed:string[][], index:number, segments:string[], result:string[]) => {
    if (index === parsed.length) {
        result.push(segments.join(''));
        return;
    }
    for (let i = 0; i < parsed[index].length; i++) {
        segments.push(parsed[index][i]);
        backTracking(parsed, index + 1, segments, result);
        segments.pop();
    }
};

export class Solution {
    /**
     * @param s: A string
     * @return: All words that can be formed
     */
    bracketExpansion (s: string): string[] {
        const parsed:string[][] = [];
        let index = 0;
        while (index < s.length) {
            if (s[index] === '{') {
                const nIndex = s.indexOf('}', index);
                if (nIndex !== index + 1) {
                    parsed.push(s.slice(index + 1, nIndex).split(',').sort());
                }

                index = nIndex + 1;
            } else {
                let nIndex = s.indexOf('{', index);
                if (nIndex === -1) {
                    nIndex = s.length;
                }
                parsed.push([s.slice(index, nIndex), ]);
                index = nIndex;
            }
        }

        const result:string[] = [];
        backTracking(parsed, 0, [], result);

        return result;
    }
}
