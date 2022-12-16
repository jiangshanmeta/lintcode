/**
 * @param A: An integer array
 * @param index1: the first index
 * @param index2: the second index
 * @return:
 */
const swapIntegers = function (A, index1, index2) {
    const tmp = A[index1];
    A[index1] = A[index2];
    A[index2] = tmp;
};
