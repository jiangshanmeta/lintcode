class Solution:
    """
    @param: nums: a list of integers
    @return: find a  majority number
    """
    def majorityNumber(self, nums):
        element = None
        count = 0
        for node in nums :
            if node == element :
                count += 1
            elif count == 0 :
                element = node
                count = 1
            else :
                count -= 1
        
        return element