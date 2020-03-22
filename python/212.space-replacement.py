class Solution:
    """
    @param: string: An array of Char
    @param: length: The true length of the string
    @return: The true length of new string
    """
    def replaceBlank(self, string, length):
        index = 0
        L = length
        while index<L :
            if string[index] == ' ' :
                string[index] = '%20'
                length += 2
            index += 1
        return length 