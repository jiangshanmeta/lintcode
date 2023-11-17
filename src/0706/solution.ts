const options = [
    [ 0, ],
    [ 1, 2, 4, 8, 16, 32, ],
    [
        3, 5, 6, 9, 10, 12,
        17, 18, 20, 24, 33, 34,
        36, 40, 48,
    ],
    [
        7, 11, 13, 14, 19, 21, 22,
        25, 26, 28, 35, 37, 38, 41,
        42, 44, 49, 50, 52, 56,
    ],
    [
        15, 23, 27, 29, 30, 39,
        43, 45, 46, 51, 53, 54,
        57, 58,
    ],
    [ 31, 47, 55, 59, ],
];

export class Solution {
    /**
     * @param num: the number of "1"s on a given timetable
     * @return: all possible time
     *          we will sort your return value in output
     */
    binaryTime (num: number): string[] {
        const result:string[] = [];
        for (let hCount = 0; hCount <= num; hCount++) {
            if (hCount >= options.length) {
                continue;
            }
            const mCount = num - hCount;
            if (mCount >= options.length) {
                continue;
            }
            const hOptions = options[hCount];
            const mOptions = options[mCount];
            for (const h of hOptions) {
                if (h >= 12) {
                    continue;
                }
                const pre = `${h}`;
                for (const m of mOptions) {
                    const suffix = m < 10 ? `0${m}` : `${m}`;

                    result.push(`${pre}:${suffix}`);
                }
            }
        }
        return result;
    }
}
