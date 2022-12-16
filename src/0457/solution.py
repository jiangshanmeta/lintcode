class Solution:
    """
    @param nums: An integer array sorted in ascending order
    @param target: An integer
    @return: An integer
    """
    def findPosition(self, nums, target):
        low = 0
        high = len(nums) - 1
        while low<=high :
            mid = (low+high) >> 1
            if nums[mid]>target :
                high = mid-1
            elif nums[mid]<target :
                low = mid+1
            else :
                return mid
            
        return -1