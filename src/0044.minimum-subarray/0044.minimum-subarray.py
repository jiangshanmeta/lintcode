class Solution:
    """
    @param: nums: a list of integers
    @return: A integer indicate the sum of minimum subarray
    """
    def minSubArray(self, nums):
        result = nums[0]
        L = len(nums)
        index = 1
        curSum = result

        while index<L :
            if curSum>0:
                curSum = nums[index]
            else :
                curSum += nums[index]
            
            result = min(result,curSum)
            index += 1
            
        return result
