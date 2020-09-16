/**
 * @param A:
 * @return: return an integer
 */
const partitionDisjoint = function (A) {
    // rightMin[i] i及后面的最小值
    const rightMin = new Array(A.length);
    rightMin[A.length - 1] = A[A.length - 1];
    for (let i = A.length - 2; i > 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], A[i]);
    }
    let leftMax = A[0];
    for (let i = 0; i < A.length - 1; i++) {
        leftMax = Math.max(leftMax, A[i]);
        if (leftMax <= rightMin[i + 1]) {
            return i + 1;
        }
    }
};
