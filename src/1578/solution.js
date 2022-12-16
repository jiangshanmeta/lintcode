/**
 * @param s: the given string
 * @return: the number of A
 */
const countA = function (s) {
    let low = 0;
    let high = s.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (s[mid] === 'B') {
            low = mid + 1;
        } else if (s[mid] === 'A') {
            let start = mid;
            let high1 = mid - 1;
            while (low <= high1) {
                const mid1 = (low + high1) >> 1;
                if (s[mid1] === 'B') {
                    low = mid1 + 1;
                } else {
                    start = Math.min(start, mid1);
                    high1 = mid1 - 1;
                }
            }
            let end = mid;
            let low1 = mid + 1;
            while (low1 <= high) {
                const mid1 = (low1 + high) >> 1;
                if (s[mid1] === 'A') {
                    end = Math.max(end, mid1);
                    low1 = mid1 + 1;
                } else {
                    high = mid1 - 1;
                }
            }
            return end - start + 1;
        } else {
            high = mid - 1;
        }
    }

    return 0;
};

console.log(countA('BBAACCDD'));
