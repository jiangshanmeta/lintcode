class Solution:
    """
    @param numbers: Give an array numbers of n integer
    @return: Find all unique triplets in the array which gives the sum of zero.
    """
    def threeSum(self, numbers):
        numbers.sort()
        result = []
        L = len(numbers)
        index1 = 0
        while index1<L-2 :
            index2 = index1+1
            index3 = L-1
            while index2<index3 :
                sumVal = numbers[index1]+numbers[index2]+numbers[index3]
                if sumVal>0 :
                    index3 -= 1
                elif sumVal<0 :
                    index2 += 1
                else :
                    result.append([numbers[index1],numbers[index2],numbers[index3]])
                    val2 = numbers[index2]
                    val3 = numbers[index3]
                    while index2<index3 and numbers[index2] == val2 :
                        index2 += 1
                    while index2<index3 and numbers[index3] == val3 :
                        index3 -= 1

            val1 = numbers[index1]
            while index1<L-2 and numbers[index1] == val1 :
                index1 += 1

        return result
