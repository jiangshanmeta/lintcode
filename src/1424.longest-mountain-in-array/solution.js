/**
 * @param A:
 * @return: the length of the longest mountain
 */
const longestMountain = function (A) {
    if (A.length < 3) {
        return 0;
    }
    // left2right[i] 从左到右含i的连续增长序列长度
    const left2right = new Array(A.length).fill(1);
    // right2left[i] 从右到左含i的连续增长序列长度
    const right2left = new Array(A.length).fill(1);
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1]) {
            left2right[i] = left2right[i - 1] + 1;
        }
    }
    for (let i = A.length - 2; i > 0; i--) {
        if (A[i] > A[i + 1]) {
            right2left[i] = right2left[i + 1] + 1;
        }
    }
    let result = 0;
    for (let i = 1; i < A.length - 1; i++) {
        if (left2right[i] > 1 && right2left[i] > 1) {
            result = Math.max(result, left2right[i] + right2left[i] - 1);
        }
    }
    return result;
};
