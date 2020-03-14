class Solution:
    """
    @param: nums: An ineger array
    @return: An integer
    """
    def removeDuplicates(self, nums):
        index = len(nums)-1
        if index == -1 :
            return 0
        last = nums[index]
        index -= 1

        while index>-1 :
            if(nums[index] == last) :
                nums.pop(index)
            else :
                last = nums[index]
                
            index -= 1
        
        return len(nums)
