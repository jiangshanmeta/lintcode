class MyQueue :
    def __init__(self) :
        self.stack1 = []
        self.stack2 = []
    
    def push(self,element):
        self.stack1.append(element)
    # 注意这个adjust操作
    def adjust(self):
        if len(self.stack2) == 0 :
            while self.stack1 :
                self.stack2.append(self.stack1.pop())

    def pop(self) :
        self.adjust()
        return self.stack2.pop()

    def top(self) :
        self.adjust()
        return self.stack2[len(self.stack2)-1]