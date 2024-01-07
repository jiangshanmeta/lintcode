class MyQueue:
    def __init__(self):
        self.seq = []
        self.l = 0
        self.r = 0
    """
    @param: item: An integer
    @return: nothing
    """
    def enqueue(self, item):
        self.seq.append(item)
        self.r += 1

    """
    @return: An integer
    """
    def dequeue(self):
        if self.r == self.l:
            return -1
        res = self.seq[self.l]
        self.l += 1
        return res