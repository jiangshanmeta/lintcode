class Solution:
    """
    @param str: An array of char
    @param offset: An integer
    @return: nothing
    """
    def rotateString(self, s, offset):
        L = len(s)
        if L == 0 :
            return
        offset %= L
        if offset == 0 :
            return
        
        copy = s[-offset:]

        index = L-offset-1
        while index>-1 :
            s[index+offset] = s[index]
            index -= 1
        
        index = 0
        while index<offset :
            s[index] = copy[index]
            index += 1
