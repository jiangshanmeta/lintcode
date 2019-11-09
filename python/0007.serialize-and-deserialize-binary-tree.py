class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None

class Solution:
    """
    @param root: An object of TreeNode, denote the root of the binary tree.
    This method will be invoked first, you should design your own algorithm 
    to serialize a binary tree which denote by a root node to a string which
    can be easily deserialized by your own "deserialize" method later.
    """
    def serialize(self, root):
        result = []
        self.serializeHelper(root,result)
        return ",".join(result)
        
    def serializeHelper(self,root,result) :
        if root is None :
            result.append('$')
            return
        result.append(str(root.val))
        self.serializeHelper(root.left,result)
        self.serializeHelper(root.right,result)
        

    """
    @param data: A string serialized by your serialize method.
    This method will be invoked second, the argument data is what exactly
    you serialized at method "serialize", that means the data is not given by
    system, it's given by your own serialize method. So the format of data is
    designed by yourself, and deserialize it here as you serialize it in 
    "serialize" method.
    """
    def deserialize(self, data):
        self.index = 0
        return self.deserializeHelper(data.split(','))
    def deserializeHelper(self,data):
        if self.index == len(data) :
            return None
        if data[self.index] == '$' :
            self.index += 1
            return None
        
        root = TreeNode(data[self.index])
        self.index += 1
        root.left = self.deserializeHelper(data)
        root.right = self.deserializeHelper(data)
        return root
        