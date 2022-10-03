class Stack:
    def __init__(self):
        self.array = []
        self.L = 0
    """
    @param: x: An integer
    @return: nothing
    """
    def push(self, x):
        self.L += 1
        self.array.append(x)

    """
    @return: nothing
    """
    def pop(self):
        self.L -= 1
        self.array.pop()

    """
    @return: An integer
    """
    def top(self):
        return self.array[self.L-1]

    """
    @return: True if the stack is empty
    """
    def isEmpty(self):
        return self.L == 0
