/**
 * @param piles: an array
 * @param H: an integer
 * @return: the minimum integer K
 */
const minEatingSpeed = function (piles, H) {
    let low = 1;
    let high = Math.max(...piles);
    let result = high;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const hours = getHours(piles, mid);

        if (hours > H) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }
    return result;
};

function getHours (piles, speed) {
    let result = 0;
    for (let i = 0; i < piles.length; i++) {
        result += Math.ceil(piles[i] / speed);
    }
    return result;
}
