export class Solution {
    /**
     * @param n: the length of strobogrammatic number
     * @return: All strobogrammatic numbers
     *          we will sort your return value in output
     */
    findStrobogrammatic (n: number): string[] {
        let result = n & 1 ? ['0', '1', '8', ] : ['', ];
        const pair = n >> 1;
        for (let i = 0; i < pair; i++) {
            result = result.reduce<string[]>((acc, item) => {
                if (i !== pair - 1) {
                    acc.push(`0${item}0`);
                }
                acc.push(`1${item}1`);
                acc.push(`6${item}9`);
                acc.push(`8${item}8`);
                acc.push(`9${item}6`);
                return acc;
            }, []);
        }

        return result;
    }
}
