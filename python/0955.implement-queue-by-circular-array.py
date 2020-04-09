class CircularQueue:
    def __init__(self, n):
        self.sequence = [0 for i in range(n)]
        self.start = -1
        self.end = -1
        self.count = 0
        # do intialization if necessary
    """
    @return:  return true if the array is full
    """
    def isFull(self):
        return self.count == len(self.sequence)

    """
    @return: return true if there is no element in the array
    """
    def isEmpty(self):
        return self.count == 0
    """
    @param element: the element given to be added
    @return: nothing
    """
    def enqueue(self, element):
        if self.start == -1 :
            self.start = 0
        self.end = (self.end+1)%len(self.sequence)
        self.sequence[self.end] = element
        self.count += 1

    """
    @return: pop an element from the queue
    """
    def dequeue(self):
        element = self.sequence[self.start]
        self.count -= 1
        if self.start == self.end :
            self.start = -1
            self.end = -1
        else :
            self.start = (self.start+1)%len(self.sequence)
        
        return element