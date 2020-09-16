/**
 * @param A: a list
 * @param B: a list
 * @param C: a list
 * @param D: a list
 * @return: how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero
 */
const fourSumCount = function (A, B, C, D) {
    const L = A.length;
    const sumCountMap = {};
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            const sum = C[i] + D[j];
            sumCountMap[sum] = (sumCountMap[sum] || 0) + 1;
        }
    }
    let result = 0;
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            const rest = -A[i] - B[j];
            if (sumCountMap[rest] !== undefined) {
                result += sumCountMap[rest];
            }
        }
    }
    return result;
};
