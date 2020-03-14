"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    """
    @param head: The head of linked list.
    @return: You should return the head of the sorted linked list, using constant space complexity.
    """
    def sortList(self, head):
        if (head is None) or (head.next is None) :
            return head
        prev = None
        fast = head
        slow = head
        while fast and fast.next :
            prev = slow
            fast = fast.next.next
            slow = slow.next

        prev.next = None

        left = self.sortList(head)
        right = self.sortList(slow)
        return self.merge(left,right) 

    def merge(self,l1,l2):
        if l1 is None :
            return l2
        if l2 is None :
            return l1
        
        if l1.val<l2.val :
            l1.next = self.merge(l1.next,l2)
            return l1
        else :
            l2.next = self.merge(l1,l2.next)
            return l2