/**
 * @param matrix: a matrix of 0 and 1
 * @return: an integer
 */
const maxSquare = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }

    const vertical = Array.from(matrix[0]);
    const horizontal = new Array(matrix[0].length);
    let lastRow = matrix[0];
    let max = Math.max(...lastRow);

    for (let i = 1; i < matrix.length; i++) {
        const newRow = new Array(matrix[0]);
        newRow[0] = matrix[i][0];
        vertical[0] = matrix[i][0];
        horizontal[0] = matrix[i][0];

        for (let j = 1; j < matrix[0].length; j++) {
            vertical[j] = matrix[i][j] === 1 ? vertical[j] + 1 : 0;
            horizontal[j] = matrix[i][j] === 1 ? horizontal[j - 1] + 1 : 0;
            newRow[j] = matrix[i][j] === 1 ? Math.min(
                lastRow[j - 1] + 1,
                horizontal[j],
                vertical[j]
            ) : 0;
        }
        max = Math.max(max, ...newRow);
        lastRow = newRow;
    }
    return max * max;
};
