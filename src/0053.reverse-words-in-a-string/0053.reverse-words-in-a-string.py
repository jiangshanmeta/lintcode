class Solution:
    """
    @param: s: A string
    @return: A string
    """
    def reverseWords(self, s):
        result = []
        tmp = []
        
        lastIsSpace = True

        for char in s :
            if char == ' ' :
                if (not lastIsSpace) :
                    result.append(''.join(tmp))
                    tmp.clear()

                lastIsSpace = True
            else :
                lastIsSpace = False
                tmp.append(char)

            print(result)
        
        len(tmp) and result.append(''.join(tmp))
        
        result.reverse()

        return " ".join(result)