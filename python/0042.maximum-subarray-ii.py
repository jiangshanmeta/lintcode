class Solution:
    """
    @param: nums: A list of integers
    @return: An integer denotes the sum of max two non-overlapping subarrays
    """
    def maxTwoSubArrays(self, nums):
        # right2left[i] 表示从i到数组末尾最大的连续子序列
        right2left = [0 for _ in range(len(nums))]
        right2left[-1] = nums[-1]
        index = len(nums)-2
        right = nums[-1]
        while index>0:
            if right<0 :
                right = nums[index]
            else :
                right += nums[index]
            right2left[index] = max(right2left[index+1],right)
            index -= 1

        result = nums[0]+right2left[1]
        # left 是以第i个为结尾的子序列的最大值
        left = nums[0]
        # leftMax 是到i-1 所有子序列的最大值
        leftMax = nums[0]
        index = 1
        while index<len(nums)-1:
            if left<0 :
                left = nums[index]
            else :
                left += nums[index]
            
            leftMax = max(leftMax,left)
            result = max(result,right2left[index+1]+leftMax)
            index += 1
        
        return result