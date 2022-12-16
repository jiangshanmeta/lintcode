class DataStream:

    def __init__(self):
        # do intialization if necessary
        self.sequence = []
        self.index = 0
        self.numCountMap = {}
    """
    @param num: next number in stream
    @return: nothing
    """
    def add(self, num):
        self.sequence.append(num)
        self.numCountMap[num] = self.numCountMap.get(num,0)+1

    """
    @return: the first unique number in stream
    """
    def firstUnique(self):
        while True :
            if self.numCountMap[self.sequence[self.index]] == 1 :
                return self.sequence[self.index]
            self.index += 1