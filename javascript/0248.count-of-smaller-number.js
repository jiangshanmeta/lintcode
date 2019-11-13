/**
 * @param A: An integer array
 * @param queries: The query list
 * @return: The number of element in the array that are smaller that the given integer
 */
const countOfSmallerNumber = function (A, queries) {
    // 数的范围是[0,10000] 所以按此构建线段树
    const segmentTree = new Array(40000).fill(0);
    for(let i=0;i<A.length;i++){
        buildSegmentTree(segmentTree,0,0,10000,A[i]);
    }

    const result = [];
    for(let i=0;i<queries.length;i++){
        if(queries[i]>0){
            result.push(querySegmentTree(segmentTree,0,0,10000,0,queries[i]-1))
        }else{
            result.push(0);
        }
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
    if(rangeL === queryL && rangeR === queryR){
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
