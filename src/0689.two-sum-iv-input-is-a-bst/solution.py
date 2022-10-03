"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param: : the root of tree
    @param: : the target sum
    @return: two numbers from tree which sum is n
    """

    def twoSum(self, root, n):
        if root is None :
            return None
        result = []
        self.inOrder(root,result)

        left = 0
        right = len(result)-1
        while left<right :
            nodeSum = result[left]+result[right]
            if nodeSum>n :
                right -= 1
            elif nodeSum<n :
                left -= 1
            else :
                return [result[left],result[right]]

    def inOrder(self,root,result):
        root.left and self.inOrder(root.left,result)
        result.append(root.val)
        root.right and self.inOrder(root.right,result)