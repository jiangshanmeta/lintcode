/**
 * @param candies: a list of integers
 * @return: return a integer
 */
const distributeCandies = function (candies) {
    const half = candies.length / 2;
    let count = 0;
    const map = {};
    let index = 0;
    while (count < half && index < candies.length) {
        if (!map[candies[index]]) {
            map[candies[index]] = true;
            count++;
        }
        index++;
    }
    return count;
};
