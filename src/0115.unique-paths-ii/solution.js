/**
 * @param obstacleGrid: A list of lists of integers
 * @return: An integer
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    const dp = new Array(m);
    let hasObstacle = false;
    for (let i = 0; i < m; i++) {
        hasObstacle = hasObstacle || obstacleGrid[0][i] === 1;
        dp[i] = hasObstacle ? 0 : 1;
    }

    for (let i = 1; i < n; i++) {
        dp[0] = dp[0] === 0 ? 0 : obstacleGrid[i][0] === 1 ? 0 : 1;
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[m - 1];
};
