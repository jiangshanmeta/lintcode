function addDot (s:string) {
    if (s.length === 1) {
        return [s, ];
    }
    if (s[s.length - 1] === '0') {
        if (s[0] === '0') {
            return [];
        }
        return [s, ];
    }
    if (s[0] === '0') {
        return [`${s[0]}.${s.slice(1)}`, ];
    }
    const result:string[] = [];

    for (let i = 1; i < s.length; i++) {
        result.push(`${s.slice(0, i)}.${s.slice(i)}`);
    }
    result.push(s);

    return result;
}

export class Solution {
    /**
   * @param s: An string
   * @return: An string
   *          we will sort your return value in output
   */
    ambiguousCoordinates (s: string): string[] {
        s = s.slice(1, s.length - 1);
        const result:string[] = [];
        for (let i = 1; i < s.length; i++) {
            const lefts = s.slice(0, i);
            const rights = s.slice(i);
            const leftPs = addDot(lefts);
            if (leftPs.length === 0) {
                continue;
            }
            const rightPs = addDot(rights);

            for (let j = 0; j < leftPs.length; j++) {
                for (let k = 0; k < rightPs.length; k++) {
                    result.push(`(${leftPs[j]}, ${rightPs[k]})`);
                }
            }
        }
        return result;
    }
}
