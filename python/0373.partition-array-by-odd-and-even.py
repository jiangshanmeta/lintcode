class Solution:
    """
    @param: nums: an array of integers
    @return: nothing
    """
    def partitionArray(self, nums):
        left = 0
        right = len(nums)-1

        while left<right :
            while left<right and nums[left]%2 == 1 :
                left += 1

            while left<right and nums[right]%2 == 0:
                right -= 1

            if left<right :
                tmp = nums[left]
                nums[left] = nums[right]
                nums[right] = tmp
                left += 1
                right -= 1
