/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: a list of length 2, [index1, index2]
 */
const searchRange = function (A, target) {
    let low = 0;
    let high = A.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (A[mid] > target) {
            high = mid - 1;
        } else if (A[mid] < target) {
            low = mid + 1;
        } else {
            let start = mid;
            let end = mid;
            let low1 = low;
            let high1 = mid - 1;
            let low2 = mid + 1;
            let high2 = high;
            while (low1 <= high1) {
                const mid1 = (low1 + high1) >> 1;
                if (A[mid1] < target) {
                    low1 = mid1 + 1;
                } else {
                    start = Math.min(start, mid1);
                    high1 = mid1 - 1;
                }
            }
            while (low2 <= high2) {
                const mid2 = (low2 + high2) >> 1;
                if (A[mid2] > target) {
                    high2 = mid2 - 1;
                } else {
                    end = Math.max(end, mid2);
                    low2 = mid2 + 1;
                }
            }
            return [start, end, ];
        }
    }
    return [-1, -1, ];
};
