class Solution:
    """
    @param: nums: An ineger array
    @return: An integer
    """
    def removeDuplicates(self, nums):
        L = len(nums)
        index = L-1
        lastVal = None
        count = 0

        while index>-1 :
            if nums[index] != lastVal :
                lastVal = nums[index]
                count = 1
            elif count == 1 :
                count += 1
            else :
                nums.pop(index)
                L -= 1
            
            index -= 1

        return L