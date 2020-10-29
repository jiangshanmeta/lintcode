class MaxStack:
    
    def __init__(self):
        self.stack = []
        self.maxStack = []
        self.indexStack = []
        # do intialization if necessary
    
    """
    @param: number: An integer
    @return: nothing
    """
    def push(self, x):
        
        if (len(self.maxStack) == 0 or x>=self.maxStack[-1]) :
            self.maxStack.append(x)
            self.indexStack.append(len(self.stack))
        self.stack.append(x)
        # write your code here

    """
    @return: An integer
    """
    def pop(self):
        value = self.stack.pop()
        if self.maxStack[-1] == value :
            self.maxStack.pop()
            self.indexStack.pop()
        
        return value
        # write your code here

    """
    @return: An integer
    """
    def top(self):
        return self.stack[-1]
        # write your code here

    """
    @return: An integer
    """
    def peekMax(self):
        return self.maxStack[-1]
        # write your code here

    """
    @return: An integer
    """
    def popMax(self):
        value = self.maxStack.pop()
        index = self.indexStack.pop()
        self.stack.pop(index)
        return value