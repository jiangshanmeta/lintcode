class Solution:
    """
    @param: dictionary: an array of strings
    @return: an arraylist of strings
    """
    def longestWords(self, dictionary):
        maxLength = 0
        result = []

        for word in dictionary :
            L = len(word)
            if L>maxLength :
                maxLength = L
                result.clear()
                result.append(word)
            elif L == maxLength :
                result.append(word)
            
        return result
