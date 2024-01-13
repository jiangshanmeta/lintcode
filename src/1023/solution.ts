function calc5 (n:number) {
    let res = 0;
    let base = 5;
    while (base <= n) {
        res += Math.floor(n / base);
        base *= 5;
    }
    return res;
}

export class Solution {
    /**
   * @param k: an integer
   * @return: how many non-negative integers x have the property that f(x) = K
   */
    preimageSizeFZF (k: number): number {
        let low = 0;
        let high = 5 * (k + 1);
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const count = calc5(mid);
            if (count > k) {
                high = mid - 1;
            } else if (count < k) {
                low = mid + 1;
            } else {
                let low1 = low;
                let high1 = mid;
                let bound1 = mid;
                let low2 = mid;
                let high2 = high;
                let bound2 = mid;
                while (low1 <= high1) {
                    const mid1 = Math.floor((low1 + high1) / 2);
                    if (calc5(mid1) < k) {
                        low1 = mid1 + 1;
                    } else {
                        bound1 = Math.min(bound1, mid1);
                        high1 = mid1 - 1;
                    }
                }
                while (low2 <= high2) {
                    const mid2 = Math.floor((low2 + high2) / 2);
                    if (calc5(mid2) > k) {
                        high2 = mid2 - 1;
                    } else {
                        bound2 = Math.max(bound2, mid2);
                        low2 = mid2 + 1;
                    }
                }
                return bound2 - bound1 + 1;
            }
        }
        return 0;
    }
}
