"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: the root of the tree
    @param target: the target
    @param K: the given K
    @return: All Nodes Distance K in Binary Tree
    """
    def distanceK(self, root, target, K):
        sequence = []
        self.findTarget(root,target,sequence)
        result = []
        index = 1
        self.getNode(target,K,result)

        K -= 1
        L = len(sequence)
        while index<L and K>-1:
            if K == 0:
                result.append(sequence[index].val)
            else :
                if sequence[index-1] == sequence[index].left:
                    self.getNode(sequence[index].right,K-1,result)
                else :
                    self.getNode(sequence[index].left,K-1,result)
                            
            K -= 1
            index += 1
        return result
        
    def getNode(self,root,K,result):
        if root is None:
            return
        if K == 0 :
            result.append(root.val)
            return
        
        self.getNode(root.left,K-1,result)
        self.getNode(root.right,K-1,result)
    
        
    
    def findTarget(self,root,target,sequence):
        if root is None :
            return False
        if root == target :
            sequence.append(root)
            return True
        
        if self.findTarget(root.left,target,sequence):
            sequence.append(root)
            return True
        
        if self.findTarget(root.right,target,sequence):
            sequence.append(root)
            return True
        return False