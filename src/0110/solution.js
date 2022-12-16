/**
 * @param grid: a list of lists of integers
 * @return: An integer, minimizes the sum of all numbers along its path
 */
const minPathSum = function (grid) {
    const dp = new Array(grid[0].length);
    dp[0] = grid[0][0];
    for (let i = 1; i < grid[0].length; i++) {
        dp[i] = dp[i - 1] + grid[0][i];
    }
    for (let i = 1; i < grid.length; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < grid[0].length; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }
    }

    return dp[grid[0].length - 1];
};
