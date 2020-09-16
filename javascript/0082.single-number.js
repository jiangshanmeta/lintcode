/**
 * @param A: An integer array
 * @return: An integer
 */
const singleNumber = function (A) {
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        result = result ^ A[i];
    }
    return result;
};
