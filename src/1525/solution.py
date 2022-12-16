"""
class UndirectedGraphNode:
     def __init__(self, x):
         self.label = x
         self.neighbors = []
"""

class Solution:
    """
    @param root: the root of the tree
    @return: post order of the tree
    """
    def postorder(self, root):
        result = []
        root and self.postOrderTraversal(root,result)
        return result

    def postOrderTraversal(self,root,result):
        for node in root.neighbors :
            self.postOrderTraversal(node,result)
        
        result.append(root.label)