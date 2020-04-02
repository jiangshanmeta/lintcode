class Vector2D(object):

    # @param vec2d {List[List[int]]}
    def __init__(self, vec2d):
        # Initialize your data structure here
        self.vec2d = vec2d
        self.L = len(vec2d)
        index = 0
        while index<self.L and len(vec2d[index]) == 0 :
            index += 1
        self.index = index
        self.innerIndex = 0

    # @return {int} a next element
    def next(self):
        node = self.vec2d[self.index][self.innerIndex]
        self.innerIndex += 1
        if self.innerIndex == len(self.vec2d[self.index]) :
            self.innerIndex = 0
            index = self.index + 1
            while index<self.L and len(self.vec2d[index]) == 0 :
                index += 1
            self.index = index
        
        return node


        

    # @return {boolean} true if it has next element
    # or false
    def hasNext(self):
        return self.index < self.L
        

