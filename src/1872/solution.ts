
export class Solution {
    /**
     * @param sticks: the length of sticks
     * @return: Minimum Cost to Connect Sticks
     */
    minimumCost (sticks: number[]): number {
        if (sticks.length === 1) {
            return 0;
        }

        const swap = (i:number, j:number) => {
            const tmp = sticks[i];
            sticks[i] = sticks[j];
            sticks[j] = tmp;
        };

        const down = (index:number) => {
            while (2 * index + 1 < sticks.length) {
                let cIndex = 2 * index + 1;
                if (cIndex + 1 < sticks.length && sticks[cIndex + 1] < sticks[cIndex]) {
                    cIndex++;
                }

                if (sticks[cIndex] < sticks[index]) {
                    swap(index, cIndex);
                    index = cIndex;
                } else {
                    break;
                }
            }
        };

        const heapPop = () => {
            const res = sticks[0];
            sticks[0] = sticks[sticks.length - 1];
            sticks.pop();
            down(0);
            return res;
        };

        for (let i = (sticks.length - 2) >> 1; i > -1; i--) {
            down(i);
        }
        let res = 0;
        while (sticks.length > 2) {
            const a = heapPop();
            const b = sticks[0];
            res += a + b;
            sticks[0] = a + b;
            down(0);
        }
        return res + sticks[0] + sticks[1];
    }
}
