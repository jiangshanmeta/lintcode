function check (houses:number[], heaters:number[], r:number) {
    if (houses[0] < heaters[0] - r) {
        return false;
    }
    let index = 0;
    let max = heaters[0] + r;
    for (let i = 0; i < heaters.length; i++) {
        if (index === houses.length) {
            return true;
        }
        const min = heaters[i] - r;
        if (max < min && houses[index] < min) {
            return false;
        }
        max = heaters[i] + r;
        while (index < houses.length && houses[index] <= max) {
            index++;
        }
    }
    return index === houses.length;
}

export class Solution {
    /**
   * @param houses: positions of houses
   * @param heaters: positions of heaters
   * @return: the minimum radius standard of heaters
   */
    findRadius (houses: number[], heaters: number[]): number {
        houses.sort((a, b) => a - b);
        heaters.sort((a, b) => a - b);
        let low = 0;
        let high = Math.max(houses[houses.length - 1], heaters[heaters.length - 1]);
        let res = high;
        while (low <= high) {
            const r = (low + high) >> 1;
            if (check(houses, heaters, r)) {
                res = Math.min(res, r);
                high = r - 1;
            } else {
                low = r + 1;
            }
        }
        return res;
    }
}
