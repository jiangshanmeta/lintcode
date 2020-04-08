class NumArray(object):

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.array = [0]
        sum = 0
        for value in nums :
            sum += value
            self.array.append(sum)
        

    def sumRange(self, i, j):
        """
        :type i: int
        :type j: int
        :rtype: int
        """
        return self.array[j+1]-self.array[i]