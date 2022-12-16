"""
This is the interface that allows for creating nested lists.
You should not implement it, or speculate about its implementation

class NestedInteger(object):
    def isInteger(self):
        # @return {boolean} True if this NestedInteger holds a single integer,
        # rather than a nested list.

    def getInteger(self):
        # @return {int} the single integer that this NestedInteger holds,
        # if it holds a single integer
        # Return None if this NestedInteger holds a nested list

    def getList(self):
        # @return {NestedInteger[]} the nested list that this NestedInteger holds,
        # if it holds a nested list
        # Return None if this NestedInteger holds a single integer
"""

class NestedIterator(object):

    def __init__(self, nestedList):
        self.plainList = []
        self.index = 0
        for node in nestedList :
            self.helper(node)
        
    def helper(self,node) :
        if node.isInteger() :
            self.plainList.append(node.getInteger())
        else :
            for subNode in node.getList() :
                self.helper(subNode)


    # @return {int} the next element in the iteration
    def next(self):
        val = self.plainList[self.index]
        self.index += 1
        return val
        
    # @return {boolean} true if the iteration has more element or false
    def hasNext(self):
        return self.index < len(self.plainList)


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())