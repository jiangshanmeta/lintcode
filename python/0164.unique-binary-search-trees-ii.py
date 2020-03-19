"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None

class Solution:
    # @paramn n: An integer
    # @return: A list of root
    def generateTrees(self, n):
        self.cache = {}
        return self.getTreeRange(1,n)
        
    def getTreeRange(self,left,right):
        if left>right :
            return [None]
        cacheKey = str(left)+','+str(right)
        if cacheKey in self.cache :
            return self.cache[cacheKey]
        
        result = []
        for i in range(left,right+1):
            leftNodes = self.getTreeRange(left,i-1)
            rightNodes = self.getTreeRange(i+1,right)
            for leftNode in leftNodes :
                for rightNode in rightNodes:
                    root = TreeNode(i)
                    root.left = leftNode
                    root.right = rightNode
                    result.append(root)
        
        self.cache[cacheKey] = result
        return result