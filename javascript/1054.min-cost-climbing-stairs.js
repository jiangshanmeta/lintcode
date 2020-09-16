/**
 * @param cost: an array
 * @return: minimum cost to reach the top of the floor
 */
const minCostClimbingStairs = function (cost) {
    if (cost.length < 2) {
        return 0;
    }
    let [a, b, ] = cost;
    for (let i = 2; i < cost.length; i++) {
        [a, b, ] = [b, Math.min(a, b) + cost[i], ];
    }
    return Math.min(a, b);
};
