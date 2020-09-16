/**
 * @param A: A list of integers
 * @return: An integer
 */
const jump = function (A) {
    // counts[i] 到达i所需要的最小步数
    const counts = new Array(A.length).fill(Infinity);
    counts[0] = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = 1; j <= A[i]; j++) {
            if (i + j === A.length) {
                break;
            }
            counts[i + j] = Math.min(counts[i + j], counts[i] + 1);
        }
    }

    return counts[A.length - 1];
};

const jump2 = function (A) {
    // [left,right] 至少需要count步才能到达
    let left = 0;
    let right = 0;
    let count = 0;
    while (right < A.length - 1) {
        count++;
        const newLeft = right + 1;
        for (let i = right; i >= left; i--) {
            right = Math.max(right, i + A[i]);
        }
        left = newLeft;
    }

    return count;
};
