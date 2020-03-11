class Solution:
    """
    @param numbers: Give an array
    @param target: An integer
    @return: Find all unique quadruplets in the array which gives the sum of zero
    """
    def fourSum(self, numbers, target):
        numbers.sort()
        L = len(numbers)
        index1 = 0
        result = []
        while index1<L-3 :
            index2 = index1+1
            while index2<L-2 :
                index3 = index2+1
                index4 = L-1
                while index3<index4 :
                    sum4 = numbers[index1]+numbers[index2]+numbers[index3]+numbers[index4]
                    if sum4>target :
                        index4 -= 1
                    elif sum4<target :
                        index3 += 1
                    else :
                        result.append([numbers[index1],numbers[index2],numbers[index3],numbers[index4]])
                        val3 = numbers[index3]
                        val4 = numbers[index4]
                        while index3<index4 and numbers[index3] == val3 :
                            index3 += 1
                        while index3<index4 and numbers[index4] == val4 :
                            index4 -= 1

                val2 = numbers[index2]
                while index2<L-2 and numbers[index2] == val2 :
                    index2 += 1
            
            val1 = numbers[index1]
            while index1<L-3 and numbers[index1] == val1 :
                index1 += 1

        return result