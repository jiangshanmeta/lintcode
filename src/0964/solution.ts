export class Solution {
    /**
     * @param lunch: an array that contains each lunch food's calories and value
     * @param dinner: an array that contains each dinner food's calories and value
     * @param t: the minest limit value
     * @return: return the min calories
     */
    getMinCalories (lunch: number[][], dinner: number[][], t: number): number {
        let res = Infinity;
        lunch.sort((a, b) => a[1] - b[1]);
        for (let i = lunch.length - 1; i > -1; i--) {
            if (lunch[i][1] < t) {
                break;
            }
            res = Math.min(res, lunch[i][0]);
        }

        dinner.sort((a, b) => a[1] - b[1]);
        for (let i = dinner.length - 1; i > -1; i--) {
            if (dinner[i][1] < t) {
                break;
            }
            res = Math.min(res, dinner[i][0]);
        }
        const heats = new Array<number>(dinner.length);
        heats[heats.length - 1] = dinner[dinner.length - 1][0];
        for (let i = heats.length - 2; i > -1; i--) {
            heats[i] = Math.min(heats[i + 1], dinner[i][0]);
        }

        let left = 0;
        let right = dinner.length - 1;
        while (left < lunch.length) {
            while (right > -1 && lunch[left][1] + dinner[right][1] >= t) {
                right--;
            }
            if (right + 1 < dinner.length && lunch[left][1] + dinner[right + 1][1] >= t) {
                res = Math.min(res, lunch[left][0] + heats[right + 1]);
            }
            left++;
        }

        return res === Infinity ? -1 : res;
    }
}
