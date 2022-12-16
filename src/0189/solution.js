/**
 * @param A: An array of integers
 * @return: An integer
 */
const firstMissingPositive = function (A) {
    let index = 0;
    while (index < A.length) {
        if (A[index] === index + 1 || A[index] < 1 || A[index] > A.length) {
            index++;
            continue;
        }
        const m = A[index];
        if (A[m - 1] !== m) {
            const tmp = A[m - 1];
            A[m - 1] = m;
            A[index] = tmp;
        } else {
            index++;
        }
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== i + 1) {
            return i + 1;
        }
    }
    return A.length + 1;
};
