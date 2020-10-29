class Solution:
    """
    @param: nums: a list of integers
    @return: The majority number that occurs more than 1/3
    """
    def majorityNumber(self, nums):
        a = None
        b = None
        aCount = 0
        bCount = 0
        for node in nums :
            if node == a :
                aCount += 1
            elif node == b :
                bCount += 1
            elif aCount == 0 :
                a = node
                aCount = 1
            elif bCount == 0 :
                b = node
                bCount = 1
            else :
                aCount -= 1
                bCount -= 1
        
        aCount = 0
        bCount = 0

        for node in nums :
            if node == a :
                aCount += 1
            elif node == b :
                bCount += 1

        oneThird = len(nums)/3
        
        if aCount>oneThird :
            return a
        else :
            return b