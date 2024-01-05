class MyContainerII:
    def __init__(self):
        self.s = set()
        self.sum = 0
        
    """
    @param element: element: Add element into this container.
    @return: nothing
    """
    def add(self, element):
        if element in self.s:
            return
        self.s.add(element)
        self.sum += element
        
    """
    @param element: element: Remove element into this container.
    @return: nothing
    """
    def remove(self, element):
        if element in self.s:
            self.s.remove(element)
            self.sum -= element

    """
    @return: Sum of integers.
    """
    def getSum(self):
        return self.sum