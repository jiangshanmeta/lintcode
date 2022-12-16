"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param lists: a list of ListNode
    @return: The head of one sorted list.
    """
    def mergeKLists(self, lists):
        L = len(lists)
        if L == 0 :
            return None
        return self.mergeHelper(lists,0,L-1)

    def mergeHelper(self,lists,start,end) :
        if start == end :
            return lists[start]
        if start+1 == end :
            return self.merge2(lists[start],lists[end])
        
        mid = (start+end) >> 1
        return self.merge2(
            self.mergeHelper(lists,start,mid),
            self.mergeHelper(lists,mid+1,end)
        )

    def merge2(self,l1,l2):
        if l2 is None :
            return l1
        if l1 is None :
            return l2
        
        if l1.val<l2.val :
            l1.next = self.merge2(l1.next,l2)
            return l1
        else :
            l2.next = self.merge2(l2.next,l1)
            return l2
