class Solution(object):

    # @param nestedList a list, each element in the list 
    # can be a list or integer, for example [1,2,[1,2]]
    # @return {int[]} a list of integer
    def flatten(self, nestedList):
        # Write your code here
        listStack = [nestedList]
        indexStack = [-1]
        result = []
        while len(listStack)>0 :
            nodeList = listStack.pop()
            index = indexStack.pop()+1
            L = len(nodeList)
            while index<L:
                if(isinstance(nodeList[index],list)) :
                    listStack.append(nodeList)
                    indexStack.append(index)
                    listStack.append(nodeList[index])
                    indexStack.append(-1)
                    break
                else :
                    result.append(nodeList[index])
                    index += 1
        return result

