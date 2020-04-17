class Solution:
    """
    @param nums: a Integer list
    @return: return the sum of subarrays
    """
    def SubArraySum(self, nums):
        result = 0
        prefixSum = 0
        index = 0
        while index<len(nums):
            prefixSum += (index+1)*nums[index]
            result += prefixSum
            index += 1
        
        return result