class Solution:
    # @param {int} n an integer
    # @return {tuple[]} a list of tuple(sum, probability)
    def dicesSum(self, n):
        dp = [0 for i in range(6*n+1)]
        for i in range(1,7) :
            dp[i] = 1
        
        for i in range(2,n+1) :
            for j in range(6*i,i-1,-1) :
                dp[j] = 0
                for k in range(1,7):
                    if j-k>0 :
                        dp[j] += dp[j-k]
                    else :
                        break

        maxCount = 6**n
        result = []
        for i in range(n,6*n+1):
            result.append([i,dp[i]/maxCount])
        return result