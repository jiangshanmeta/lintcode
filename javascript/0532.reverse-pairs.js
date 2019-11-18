/**
 * @param A: an array
 * @return: total of reverse pairs
 */
const reversePairs = function (A) {
    if(A.length === 0){
        return 0;
    }

    return countReversePairs(A,new Array(A.length),0,A.length-1);
}

function countReversePairs(A,copy,start,end){
    if(start === end){
        return 0;
    }
    const mid = (start+end) >> 1;
    let count = 0;
    count += countReversePairs(A,copy,start,mid);
    count += countReversePairs(A,copy,mid+1,end);
    
    for(let i=start;i<=end;i++){
        copy[i] = A[i];
    }

    let index1 = start;
    let index2 = mid+1;
    while(index1<mid+1 && index2<end+1){
        if(copy[index1]>copy[index2]){
            count += mid+1-index1;
            A[start++] = copy[index2++];
        }else{
            A[start++] = copy[index1++];
        }
    }

    while(index1<mid+1){
        A[start++] = copy[index1++];
    }
    while(index2<end+1){
        A[start++] = copy[index2++];
    }

    return count;
}