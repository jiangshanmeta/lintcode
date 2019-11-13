/**
 * @param A: an integer array
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const countOfSmallerNumberII = function (A) {
    const segmentTree = new Array(40000).fill(0);
    const result = [];
    for(let i=0;i<A.length;i++){
        if(A[i]>0){
            result.push(querySegmentTree(segmentTree,0,0,10000,0,A[i]-1))
        }else{
            result.push(0);
        }
        buildSegmentTree(segmentTree,0,0,10000,A[i]);
    }
    return result;
}

function buildSegmentTree(segmentTree,rootIndex,rangeL,rangeR,target){
    if(rangeL === rangeR && rangeL === target){
        segmentTree[rootIndex]++;
        return;
    }
    const mid = (rangeL+rangeR) >> 1;
    const leftIndex = 2*rootIndex+1;
    const rightIndex = 2*rootIndex+2;
    if(target>mid){
        buildSegmentTree(segmentTree,rightIndex,mid+1,rangeR,target);
    }else{
        buildSegmentTree(segmentTree,leftIndex,rangeL,mid,target);
    }
    segmentTree[rootIndex] = segmentTree[leftIndex]+segmentTree[rightIndex];
}

function querySegmentTree(segmentTree,rootIndex,rangeL,rangeR,queryL,queryR){
    if(queryL === rangeL && queryR === rangeR){
        return segmentTree[rootIndex];
    }
    const mid = (rangeL+rangeR) >> 1;
    const leftIndex = 2*rootIndex+1;
    const rightIndex = 2*rootIndex+2;
    
    if(queryL>mid){
        return querySegmentTree(segmentTree,rightIndex,mid+1,rangeR,queryL,queryR);
    }else if(queryR<mid+1){
        return querySegmentTree(segmentTree,leftIndex,rangeL,mid,queryL,queryR);
    }else{
        return querySegmentTree(segmentTree,leftIndex,rangeL,mid,queryL,mid)+querySegmentTree(segmentTree,rightIndex,mid+1,rangeR,mid+1,queryR);
    }
}