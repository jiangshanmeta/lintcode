from collections import deque

class MovingAverage:
    """
    @param: size: An integer
    """
    def __init__(self, size):
        self.queue = deque([])
        self.size = size
        self.len = 0
        self.sum = 0
        # do intialization if necessary

    """
    @param: val: An integer
    @return:  
    """
    def next(self, val):
        if self.len == self.size :
            self.sum -= self.queue.popleft()
            self.len -= 1
        
        self.queue.append(val)
        self.sum += val
        self.len += 1
        return self.sum/self.len

