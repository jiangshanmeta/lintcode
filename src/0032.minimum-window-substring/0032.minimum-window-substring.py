class Solution:
    """
    @param source : A string
    @param target: A string
    @return: A string denote the minimum window, return "" if there is no such a string
    """
    def minWindow(self, source , target):
        hashMap = {}
        count = 0
        for letter in target :
            if letter not in hashMap:
                hashMap[letter] = 1
                count += 1
            else:
                hashMap[letter] += 1
                
        left = 0
        right = -1
        result = ""
        while right<len(source) and left<len(source):
            if count == 0:
                if result == '' or right-left+1<len(result):
                    result = source[left:right+1]
                
                if source[left] in hashMap :
                    hashMap[source[left]] += 1
                    if hashMap[source[left]] == 1:
                        count += 1
                left += 1
            else :
                right += 1
                if(right<len(source) and source[right] in hashMap):
                    hashMap[source[right]] -= 1
                    if hashMap[source[right]] == 0 :
                        count -= 1
        
        return result