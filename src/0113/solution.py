"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    """
    @param head: head is the head of the linked list
    @return: head of the linked list
    """
    def deleteDuplicates(self, head):
        dummyHead = ListNode(0)
        dummyHead.next = head
        prev = dummyHead
        lastVal = None
        count = 0

        while head :
            if head.val == lastVal :
                prev.next = head.next
                count = 2
            else :
                lastVal = head.val
                if count == 1 :
                    prev = prev.next
                
                count = 1
            head = head.next
        
        return dummyHead.next
