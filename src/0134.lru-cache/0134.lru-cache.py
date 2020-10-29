class LRUCache:
    """
    @param: capacity: An integer
    """
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = LinkedListNode(0,0)
        self.tail = LinkedListNode(0,0)
        self.head.next = self.tail
        self.tail.prev = self.head
        # do intialization if necessary

    def removeNode(self,node):
        prev = node.prev
        next = node.next
        prev.next = next
        next.prev = prev
        node.prev = None
        node.next = None
        
    def insertNode(self,node):
        next = self.head.next
        prev = self.head
        node.next = next
        node.prev = prev
        prev.next = node
        next.prev = node

    """
    @param: key: An integer
    @return: An integer
    """
    def get(self, key):
        # write your code here
        if key not in self.cache :
            return -1
        node = self.cache[key]
        self.removeNode(node)
        self.insertNode(node)
        return node.value    
    """
    @param: key: An integer
    @param: value: An integer
    @return: nothing
    """
    def set(self, key, value):
        # write your code here
        
        if key not in self.cache :

            if self.capacity == 0 :
                removedNode = self.tail.prev
                self.removeNode(removedNode)
                del self.cache[removedNode.key]
            else :
                self.capacity -= 1
            newNode = LinkedListNode(key,value)
            self.cache[key] = newNode
            self.insertNode(newNode)
        else :
            node = self.cache[key]
            node.value = value
            self.removeNode(node)
            self.insertNode(node)
class LinkedListNode :
    def __init__(self,key,value) :
        self.key = key
        self.value = value
        self.prev = None
        self.next = None