class RandomListNode:
    def __init__(self, x):
        self.label = x
        self.next = None
        self.random = None



class Solution:
    # @param head: A RandomListNode
    # @return: A RandomListNode
    def copyRandomList(self, head):
        if head is None :
            return None
        
        node = head
        while node :
            cloneNode = RandomListNode(node.label)
            cloneNode.next = node.next
            node.next = cloneNode
            node = cloneNode.next
        
        node = head
        while node :
            if node.random :
                node.next.random = node.random.next
            
            node = node.next.next
        
        cloneHead = head.next
        prev = cloneHead
        head.next = cloneHead.next
        head = head.next

        while head :
            prev.next = head.next
            head.next = head.next.next
            prev = prev.next
            head = head.next
        
        return cloneHead