/**
 * @param A: An integer array
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const continuousSubarraySum = function (A) {
    let max = A[0];
    let dp = A[0];
    const result = [0, 0, ];
    let startIndex = 0;
    for (let i = 1; i < A.length; i++) {
        if (dp < 0) {
            startIndex = i;
            dp = A[i];
        } else {
            dp += A[i];
        }
        if (dp > max) {
            max = dp;
            result[0] = startIndex;
            result[1] = i;
        }
    }
    return result;
};
