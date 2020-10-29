/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
const searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }

    let row = 0;
    let column = matrix[0].length - 1;
    while (row < matrix.length && column > -1) {
        // 看右上角的元素 若比target大 则这一列都不用看了 若比target小 这一行都不用看了
        const node = matrix[row][column];
        if (node > target) {
            column--;
        } else if (node < target) {
            row++;
        } else {
            return true;
        }
    }
    return false;
};
