/**
 * @param letters: a list of sorted characters
 * @param target: a target letter
 * @return: the smallest element in the list that is larger than the given target
 */
const nextGreatestLetter = function (letters, target) {
    let result = letters.length;
    let low = 0;
    let high = letters.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (letters[mid] > target) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (result === letters.length) {
        return letters[0];
    }
    return letters[result];
};
