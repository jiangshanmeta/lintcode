"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class Solution:
    """
    @param head: The head of linked list.
    @return: nothing
    """
    def reorderList(self, head):
        if head is None or head.next is None :
            return True

        prev = None
        slow = head
        fast = head
        
        while fast is not None and fast.next is not None :
            prev = slow
            slow = slow.next
            fast = fast.next.next

        head2 = self.reverse(prev.next)
        prev.next = None
        dummyHead = ListNode(0)
        last = dummyHead

        while head is not None and head2 is not None :
            nextHead = head.next
            nextHead2 = head2.next
            last.next = head
            last = last.next
            last.next = head2
            last = last.next

            head = nextHead
            head2 = nextHead2
        
        if head :
            last.next = head

        return dummyHead.next

    def reverse(self,head) :
        dummyHead = ListNode(0)

        while head is not None :
            nextHead = head.next
            head.next = dummyHead.next
            dummyHead.next = head
            head = nextHead
        
        return dummyHead.next
