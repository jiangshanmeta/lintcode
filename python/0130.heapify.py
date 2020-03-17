class Solution:
    """
    @param: A: Given an integer array
    @return: nothing
    """
    # 构建最小堆
    def heapify(self, A):
        L = len(A)
        if L == 0 :
            return 
        index = (L-2)//2
        while index>-1 :
            self.siftDown(A,index)
            index -= 1
        
        
    def siftDown(self,A,index):
        L = len(A)
        while 2*index+1<L :
            child = 2*index+1
            # 判断是否有右子节点 以及右子节点是否更小
            if child+1<L and A[child+1]<A[child] :
                child += 1
            # 父节点和子节点中最小的一个交换
            if A[index]>A[child] :
                self.swap(A,index,child)
                index = child
            else :
                break
    def swap(self,A,i,j) :
        tmp = A[i]
        A[i] = A[j]
        A[j] = tmp