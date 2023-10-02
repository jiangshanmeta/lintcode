function findLowerBound (a:number[], target:number) {
    let result = -1;
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (a[mid] < target) {
            result = Math.max(result, mid);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}

function findUpperBound (a:number[], target:number) {
    let result = a.length;
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (a[mid] > target) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}

export class Solution {
    /**
     * @param a: the array a
     * @param q: the queries q
     * @return: for each query, return the number of legal integers
     */
    getAns (a: number[], q: number[][]): number[] {
        a.sort((c, d) => c - d);

        return q.map(([l, h, ]) => {
            return findUpperBound(a, h) - findLowerBound(a, l) - 1;
        });
    }
}
