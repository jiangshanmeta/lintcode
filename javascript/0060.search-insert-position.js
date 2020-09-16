/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: An integer
 */
const searchInsert = function (A, target) {
    let result = A.length;
    let low = 0;
    let high = A.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (A[mid] < target) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }
    return result;
};
