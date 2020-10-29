/**
 * @param A: the array
 * @return: Maximum Sum Circular Subarray
 */
const maxSubarraySumCircular = function (A) {
    const rightMax = new Array(A.length);
    rightMax[rightMax.length - 1] = A[A.length - 1];
    let suffix = A[A.length - 1];
    for (let i = A.length - 2; i > 0; i--) {
        suffix += A[i];
        rightMax[i] = Math.max(rightMax[i + 1], suffix);
    }
    rightMax.push(0);
    let result = -Infinity;
    let sum = 0;
    let prefix = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (prefix < 0) {
            prefix = A[i];
        } else {
            prefix += A[i];
        }
        result = Math.max(
            result,
            prefix,
            sum + rightMax[i + 1]
        );
    }
    return result;
};
