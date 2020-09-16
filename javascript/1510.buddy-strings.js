/**
 * @param A: string A
 * @param B: string B
 * @return: bool
 */
const buddyStrings = function (A, B) {
    if (A.length !== B.length) {
        return false;
    }

    let lastIndex = -1;
    const map = {};
    let changed = false;
    let hasDuplicate = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            if (changed) {
                return false;
            }

            if (lastIndex === -1) {
                lastIndex = i;
            } else {
                if (A[i] !== B[lastIndex] || B[i] !== A[lastIndex]) {
                    return false;
                }
                changed = true;
            }
        }
        if (!map[A[i]]) {
            map[A[i]] = true;
        } else {
            hasDuplicate = true;
        }
    }

    return changed || hasDuplicate;
};
