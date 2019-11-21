/**
 * @param matrix: a matrix of integers
 * @param k: An integer
 * @return: the kth smallest number in the matrix
 */
const kthSmallest = function (matrix, k) {
    // 最小堆
    k--;
    const heap = [[matrix[0][0],0,0]];
    const M = matrix.length;
    const N = matrix[0].length;
    const visited = new Array(M*N);
    for(let i=0;i<k;i++){
        const x = heap[0][1]
        const y = heap[0][2];

        heap[0] = heap[heap.length-1];
        heap.pop();
        sideDown(heap,0);
        if(y+1<N && !visited[N*x+y+1]){
            visited[N*x+y+1] = true;
            heap.push([matrix[x][y+1],x,y+1]);
            sideUp(heap,heap.length-1);
        }
        if(x+1<M && !visited[N*(x+1)+y]){
            visited[N*(x+1)+y] = true;
            heap.push([matrix[x+1][y],x+1,y]);
            sideUp(heap,heap.length-1);
        }
    }

    return heap[0][0]
}
function swap(heap,i,j){
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideDown(heap,index){
    while(2*index+1<heap.length){
        let child = 2*index+1;
        if(child+1<heap.length && heap[child+1][0]<heap[child][0]){
            child++;
        }
        if(heap[index][0]>heap[child][0]){
            swap(heap,index,child);
            index = child;
        }else{
            break;
        }
    }
}

function sideUp(heap,index){
    while(index>0){
        const parent = (index-1) >> 1;
        if(heap[parent][0]>heap[index][0]){
            swap(heap,parent,index);
            index = parent;
        }else{
            break;
        }
    }
}