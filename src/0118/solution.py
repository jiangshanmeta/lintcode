class Solution:
    """
    @param S: A string
    @param T: A string
    @return: Count the number of distinct subsequences
    """
    def numDistinct(self, S, T):
        # dp[i][j] S取前i个 T取前j个 能找到的distinct num
        # dp[i][j] = dp[i-1][j]  ( S[i-1] !== T[j-1]) (只能删掉S[i-1])
        # dp[i][j] = dp[i-1][j-1] + dp[i-1][j]  ( S[i-1] === T[j-1] ) (可以选择删掉S[i-1] 也可以不删)
        # dp[i][0] = 0
        dp = [0 for _ in range(len(T)+1)]
        dp[0] = 1
        
        for i in range(1,len(S)+1):
            for j in range(min(i,len(T)),0,-1):
                if S[i-1] == T[j-1]:
                    dp[j] += dp[j-1]

        return dp[len(T)]
