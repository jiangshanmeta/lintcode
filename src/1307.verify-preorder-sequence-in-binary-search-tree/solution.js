/**
 * @param preorder: List[int]
 * @return: return a boolean
 */
const verifyPreorder = function (preorder) {
    return verify(preorder, 0, preorder.length - 1, -Infinity, Infinity);
};

function verify (preorder, start, end, min, max) {
    if (start > end) {
        return true;
    }
    if (preorder[start] < min || preorder[start] > max) {
        return false;
    }
    let rightStart = end + 1;
    let low = start + 1;
    let high = end;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (preorder[mid] > preorder[start]) {
            rightStart = Math.min(rightStart, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return verify(preorder, start + 1, rightStart - 1, min, preorder[start]) && verify(preorder, rightStart + 1, end, preorder[start], max);
}
