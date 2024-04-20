export class Solution {
    /**
     * @param mat: the matrix
     * @return:
     */
    smallestCommonElement (mat: number[][]): number {
        const M = mat.length;
        const N = mat[0].length;
        const indexs = new Array<number>(M).fill(0);
        while (indexs[0] < N) {
            const target = mat[0][indexs[0]++];
            let af = true;
            for (let j = 1; j < indexs.length; j++) {
                let l = indexs[j];
                let r = N - 1;
                let res = N;
                let found = false;
                while (l <= r) {
                    const m = (l + r) >> 1;
                    if (mat[j][m] < target) {
                        l = m + 1;
                    } else if (mat[j][m] > target) {
                        r = m - 1;
                        res = Math.min(res, m);
                    } else {
                        found = true;
                        res = m;
                        break;
                    }
                }
                indexs[j] = res;
                if (res === N) {
                    return -1;
                }
                if (!found) {
                    af = false;
                    break;
                }
            }
            if (af) {
                return target;
            }
        }
        return -1;
    }
}
