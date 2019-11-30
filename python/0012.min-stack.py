class MinStack:
    
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
        # do intialization if necessary

    """
    @param: number: An integer
    @return: nothing
    """
    def push(self, number):
        self.stack1.append(number)
        if len(self.stack2) == 0 or number<=self.stack2[len(self.stack2)-1] :
            self.stack2.append(number)

    """
    @return: An integer
    """
    def pop(self):
        node = self.stack1.pop()
        if node == self.stack2[len(self.stack2)-1] :
            self.stack2.pop()
        
        return node

    """
    @return: An integer
    """
    def min(self):
        return self.stack2[len(self.stack2)-1]
