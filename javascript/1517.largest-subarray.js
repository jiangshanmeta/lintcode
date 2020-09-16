/**
 * @param A: the array
 * @param K: the length
 * @return: the largest subarray
 */
const largestSubarray = function (A, K) {
    let resultStartIndex = 0;
    for (let i = 1; i < A.length - K + 1; i++) {
        if (isGreater(A, i, resultStartIndex, K)) {
            resultStartIndex = i;
        }
    }
    return A.slice(resultStartIndex, resultStartIndex + K);
};

function isGreater (A, start1, start2, K) {
    for (let i = 0; i < K; i++) {
        if (A[i + start1] > A[i + start2]) {
            return true;
        } else if (A[i + start1] < A[i + start2]) {
            return false;
        }
    }
    return false;
}
