class Solution:
    """
    @param nums1: an integer array
    @param nums2: an integer array
    @return: an integer array
    """
    def intersection(self, nums1, nums2):
        list1 = []
        dict1 = {}
        dict2 = {}
        for value in nums1 :
            if value not in dict1 :
                dict1[value] = True
                list1.append(value)
        
        for value in nums2 :
            dict2[value] = True
        
        result = []
        for node in list1 :
            if node in dict2 :
                result.append(node)

        result.sort()
        return result