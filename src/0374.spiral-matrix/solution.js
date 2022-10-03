/**
 * @param matrix: a matrix of m x n elements
 * @return: an integer list
 */
const spiralOrder = function (matrix) {
    if (!matrix.length) {
        return [];
    }
    const result = [];
    const M = matrix.length;
    const N = matrix[0].length;
    let i = 0;
    let j = 0;
    while (i <= M - i - 1 && j <= N - j - 1) {
        for (let k = j; k <= N - j - 1; k++) {
            result.push(matrix[i][k]);
        }
        for (let k = i + 1; k <= M - i - 1; k++) {
            result.push(matrix[k][N - j - 1]);
        }
        if (i !== M - i - 1) {
            for (let k = N - j - 2; k >= j; k--) {
                result.push(matrix[M - i - 1][k]);
            }
        }
        if (j !== N - j - 1) {
            for (let k = M - i - 2; k > i; k--) {
                result.push(matrix[k][j]);
            }
        }
        i++;
        j++;
    }
    return result;
};
