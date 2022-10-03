/**
 * @param A: An array of Integer
 * @return: an integer
 */
const longestIncreasingContinuousSubsequence = function (A) {
    if (A.length === 0) {
        return 0;
    }
    let result = 1;
    let lastVal = A[0];
    let length = 1;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > lastVal) {
            length++;
        } else {
            length = 1;
        }
        lastVal = A[i];
        result = Math.max(result, length);
    }
    lastVal = A[A.length - 1];
    length = 1;
    for (let i = A.length - 2; i > -1; i--) {
        if (A[i] > lastVal) {
            length++;
        } else {
            length = 1;
        }
        lastVal = A[i];
        result = Math.max(result, length);
    }
    return result;
};
