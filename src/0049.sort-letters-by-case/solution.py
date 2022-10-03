class Solution:
    """
    @param: chars: The letter array you should sort by Case
    @return: nothing
    """
    def sortLetters(self, chars):
        left = 0
        right = len(chars)-1

        while left<right :
            while left<right and chars[left].islower() :
                left += 1
            while left<right and chars[right].isupper():
                right -= 1

            if left<right :
                tmp = chars[left]
                chars[left] = chars[right]
                chars[right] = tmp
                left += 1
                right -= 1
