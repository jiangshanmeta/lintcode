class TwoSum:
    def __init__(self):
        self.numberCountMap = {}

    """
    @param number: An integer
    @return: nothing
    """
    def add(self, number):
        count = 1
        if number in self.numberCountMap :
            count = self.numberCountMap[number]+1

        self.numberCountMap[number] = count

    """
    @param value: An integer
    @return: Find if there exists any pair of numbers which sum is equal to the value.
    """
    def find(self, value):
        for node in self.numberCountMap :
            rest = value-node
            if rest == node :
                if self.numberCountMap[node]>1 :
                    return True
            elif rest in self.numberCountMap:
                return True

        return False