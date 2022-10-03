class Solution:
    """
    @param temperatures: a list of daily temperatures
    @return: a list of how many days you would have to wait until a warmer temperature
    """
    def dailyTemperatures(self, temperatures):
        result = [0 for i in range(len(temperatures))]
        indexStack = []
        index = 0
        L = len(temperatures)
        while index<L :
            while len(indexStack) and temperatures[indexStack[len(indexStack)-1]]<temperatures[index] :
                lastIndex = indexStack.pop()
                result[lastIndex] = index-lastIndex
            
            indexStack.append(index)
            index += 1
        
        return result
            
