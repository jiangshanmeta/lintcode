class MyContainer:
    sum = 0
    """
    @param element: Add element into this container.
    @return: nothing
    """
    def add(self, element):
        self.sum += element

    """
    @return: Sum of integers.
    """
    def getSum(self):
        return self.sum