class Solution:
    """
    @param nums: An array of integers.
    @return: nothing
    """
    def arrayReplaceWithGreatestFromRight(self, nums):
        index = len(nums)-1
        if index == -1 :
            return 
        
        maxEle = nums[index]
        nums[index] = -1
        index -= 1

        while index>-1 :
            node = nums[index]
            nums[index] = maxEle
            maxEle = max(maxEle,node)
            index -= 1