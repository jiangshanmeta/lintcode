class Solution:
    """
    @param: A: An integer array.
    @return: nothing
    """
    def rerange(self, A):
        # 可能有奇数个，要决定正数做第一个还是负数做第一个
        positive = 0
        for i in A :
            if i>0 :
                positive += 1
            else :
                positive -= 1

        left = 0
        right = len(A)-1
        print(positive)
        if positive>=0 :
            while left<right :
                while left<right and  ((left%2 == 0 and A[left]>0) or (left%2 == 1 and A[left]<0) )   :
                    left += 1
                
                while left<right :
                    if (right%2 == 0 and A[right]>0) or (right%2 == 1 and A[right]<0 ) :
                        right -= 1
                    
                    elif left%2 == right%2 :
                            # 虽然A[right]处于错误的位置，但是由于A[left]和A[right]符号一致，所以直接交换没意义
                            # 所以从前找一个合适的交换过来
                            index = right-1
                            needPositive = A[right]<0
                            while index>left and ( (needPositive and A[index]<0) or (needPositive == False and A[index]>0)) :
                                index -= 1
                            
                            tmp = A[right]
                            A[right] = A[index]
                            A[index] = tmp
                    else :
                        break
                        
                print(left,right,A[left],A[right])
                if left<right :
                    tmp = A[right]
                    A[right] = A[left]
                    A[left] = tmp
                    left += 1
                    right -= 1

        else :
            while left<right :
                while left<right and ( (left%2 == 0 and A[left]<0) or (left%2 == 1 and A[left]>0)) :
                    left += 1
                
                while left<right :
                    if (right%2 == 0 and A[right]<0) or (right%2 == 1 and A[right]>0) :
                        right -= 1
                    
                    elif left%2 == right%2 :
                            index = right-1
                            needPositive = A[right]<0
                            while index>left and ( (needPositive and A[index]<0) or (needPositive == False and A[index]>0)) :
                                index -= 1
                            
                            tmp = A[right]
                            A[right] = A[index]
                            A[index] = tmp
                            right -= 1
                    else :
                        break
                print(left,right,A[left],A[right])
                if left<right :

                    tmp = A[right]
                    A[right] = A[left]
                    A[left] = tmp
                    left += 1
                    right -= 1