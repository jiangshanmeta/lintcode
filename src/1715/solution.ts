export class Solution {
    /**
     * @param a: an array
     * @return: divide the array into 3 non-empty parts
     */
    threeEqualParts (a: number[]): number[] {
        let total = 0;

        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        if (total % 3 !== 0) {
            return [-1, -1, ];
        }
        const M = total / 3;
        let index = a.length - 1;
        let tailZeroCount = 0;
        while (index > -1 && a[index] !== 1) {
            tailZeroCount++;
            index--;
        }
        if (tailZeroCount === a.length) {
            return [0, a.length - 1, ];
        }

        const firstStartIndex = a.indexOf(1);
        let firstEndIndex = firstStartIndex;
        let first1C = 0;
        let first0C = 0;

        while (first1C < M) {
            if (a[firstEndIndex] === 1) {
                first1C++;
            }
            firstEndIndex++;
        }
        while (first0C < tailZeroCount) {
            if (a[firstEndIndex] === 1) {
                return [-1, -1, ];
            }
            first0C++;
            firstEndIndex++;
        }

        const i = firstEndIndex - 1;
        const secondStartIndex = a.indexOf(1, firstEndIndex);
        let secondEndIndex = secondStartIndex;
        let second1C = 0;
        let second0C = 0;

        while (second1C < M) {
            if (a[secondEndIndex] === 1) {
                second1C++;
            }
            secondEndIndex++;
        }
        while (second0C < tailZeroCount) {
            if (a[secondEndIndex] === 1) {
                return [-1, -1, ];
            }
            second0C++;
            secondEndIndex++;
        }

        const j = secondEndIndex;

        const thirdStartIndex = a.indexOf(1, secondEndIndex);
        const l1 = firstEndIndex - firstStartIndex;
        const l2 = secondEndIndex - secondStartIndex;
        const l3 = a.length - thirdStartIndex;
        if (l1 !== l2 || l2 !== l3 || l1 !== l3) {
            return [-1, -1, ];
        }
        for (let offset = 0; offset < l1; offset++) {
            const n = a[firstStartIndex + offset];
            if (a[secondStartIndex + offset] !== n || a[thirdStartIndex + offset] !== n) {
                return [-1, -1, ];
            }
        }

        return [i, j, ];
    }
}
