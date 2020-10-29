class StringUtils:
    """
    @param: originalStr: the string we want to append to
    @param: size: the target length of the string
    @param: padChar: the character to pad to the left side of the string
    @return: A string
    """
    @classmethod
    def leftPad(self, originalStr, size, padChar=' '):
        L = len(originalStr)
        if L>= size :
            return originalStr
        arr = [padChar for i in range(size)]
        L -= 1
        while L>-1 :
            size -= 1
            arr[size] = originalStr[L]
            L -= 1

        return ''.join(arr)