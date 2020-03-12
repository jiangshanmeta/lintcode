"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: A tree
    @return: buttom-up level order a list of lists of integer
    """
    def levelOrderBottom(self, root):
        self.result = []
        root and self.levelOrder([root])
        self.result.reverse()
        return self.result

    def levelOrder(self,lastLevel):
        lastLevelVals = []
        nextLevel = []
        for node in lastLevel:
            lastLevelVals.append(node.val)
            node.left and nextLevel.append(node.left)
            node.right and nextLevel.append(node.right)
        self.result.append(lastLevelVals)

        len(nextLevel) and self.levelOrder(nextLevel)