/**
 * @param matrix: the given matrix
 * @return: True if and only if the matrix is Toeplitz
 */
const isToeplitzMatrix = function (matrix) {
    if (!matrix.length) {
        return true;
    }
    const M = matrix.length;
    const N = matrix[0].length;
    for (let i = 0; i < M; i++) {
        const node = matrix[i][0];
        let j = i + 1;
        let k = 1;
        while (j < M && k < N) {
            if (matrix[j++][k++] !== node) {
                return false;
            }
        }
    }

    for (let i = 1; i < N; i++) {
        const node = matrix[0][i];
        let j = 1;
        let k = i + 1;
        while (j < M && k < N) {
            if (matrix[j++][k++] !== node) {
                return false;
            }
        }
    }

    return true;
};
