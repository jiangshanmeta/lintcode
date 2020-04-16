from math import gcd

class Solution:
    """
    @param deck: a integer array
    @return: return a value of bool
    """
    def hasGroupsSizeX(self, deck):
        array = []
        obj = {}
        for val in deck :
            if val in obj :
                obj[val] += 1
            else :
                array.append(val)
                obj[val] = 1
        
        num = obj[array[0]]
        index = 1
        L = len(array)
        while index<L :
            num = gcd(num,obj[array[index]])
            index += 1
            if num == 1 :
                return False

        return num>1