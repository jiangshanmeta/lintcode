"""
The guess API is already defined for you.
@param num, your guess
@return -1 if my number is lower, 1 if my number is higher, otherwise return 0
you can call Guess.guess(num)
"""


class Solution:
    # @param {int} n an integer
    # @return {int} the number you guess
    def guessNumber(self, n):
        low = 1
        while True :
            mid = (low+n) // 2
            rst = Guess.guess(mid)
            if rst == -1 :
                n = mid-1
            elif rst == 1:
                low = mid+1
            else:
                return mid