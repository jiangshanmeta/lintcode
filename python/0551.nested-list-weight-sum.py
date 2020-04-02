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


class Solution(object):
    # @param {NestedInteger[]} nestedList a list of NestedInteger Object
    # @return {int} an integer
    def depthSum(self, nestedList):
        # Write your code here
        self.result = 0

        index = 0
        L = len(nestedList)

        while index<L :
            self.getSum(nestedList[index],1)
            index += 1
        
        return self.result


    def getSum(self,node,depth) :
        if node.isInteger() :
            self.result += node.getInteger()*depth
        else :
            arr = node.getList()
            index = 0
            L = len(arr)
            depth += 1
            while index<L :
                self.getSum(arr[index],depth)
                index += 1
