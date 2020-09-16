/**
 * @param num: a positive integer
 * @return: if num is a perfect square else False
 */
const isPerfectSquare = function (num) {
    if (num === 1) {
        return true;
    }
    // 就是开根号
    let low = 1;
    let high = num - 1;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const square = mid * mid;
        if (square === num) {
            return true;
        } else if (square > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};
