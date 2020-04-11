class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None

class Solution:
    def serialize(self, root):
        result = []
        self.serializeHelper(root,result)
        return ','.join(result)
    def serializeHelper(self,root,result) :
        if root is None :
            result.append('$')
            return
        
        result.append(str(root.val))
        self.serializeHelper(root.left,result)
        self.serializeHelper(root.right,result)

    def deserialize(self, data):
        self.index = 0

        return self.deserializeHelper(data.split(','))
        
    def deserializeHelper(self,data) :
        if self.index == len(data) :
            return 
        
        if data[self.index] == '$' :
            self.index += 1
            return None
            
        root = TreeNode(data[self.index])
        self.index += 1
        root.left = self.deserializeHelper(data)
        root.right = self.deserializeHelper(data)
        return root
            