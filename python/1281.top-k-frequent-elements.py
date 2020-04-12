class Solution:
    """
    @param nums: the given array
    @param k: the given k
    @return: the k most frequent elements
    """
    def topKFrequent(self, nums, k):
        countMap = {}
        uniqueNums = [];
        for num in nums :
            if num in countMap :
                countMap[num] += 1
            else :
                countMap[num] = 1
                uniqueNums.append(num)
        
        heap = []
        
        for num in uniqueNums :
            if len(heap)<k :
                heap.append(num)
                self.sideUp(heap,len(heap)-1,countMap)
            elif countMap[num]>countMap[heap[0]] :
                heap[0] = num
                self.sideDown(heap,0,countMap)
            
        result = []
        while heap :
            result.append(self.dequeen(heap,countMap))
        return result
        
    def swap(self,heap,i,j):
        tmp = heap[i]
        heap[i] = heap[j]
        heap[j] = tmp
    
    def sideUp(self,heap,index,countMap) :
        while index>0 :
            parent = (index-1) // 2
            if countMap[heap[parent]]>countMap[heap[index]] :
                self.swap(heap,index,parent)
                index = parent
            else :
                break
        
    def sideDown(self,heap,index,countMap) :
        while 2*index+1<len(heap) :
            child = 2*index+1
            if child+1<len(heap) and countMap[heap[child+1]]<countMap[heap[child]] :
                child += 1
            if countMap[heap[index]]>countMap[heap[child]] :
                self.swap(heap,index,child)
                index = child
            else :
                break
            
    def dequeen(self,heap,countMap):
        result = heap[0]
        heap[0] = heap[-1]
        heap.pop()
        self.sideDown(heap,0,countMap)
        return result