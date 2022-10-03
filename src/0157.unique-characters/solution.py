class Solution:
    """
    @param: str: A string
    @return: a boolean
    """
    def isUnique(self, str):
        d = {}
        for char in str :
            if char in d :
                return False
            d[char] = True
        return True
