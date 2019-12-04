/**
 * @param root: the root of tree
 * @return: the vertical order traversal
 */
const verticalOrder = function (root) {
    if(!root){
        return [];
    }
    const start = -getLefsPosition(root,0);
    const result = [];
    bfs([root],[start],result);
    return result;
}

function getLefsPosition(root,index){
    if(!root){
        return 0;
    }
    return Math.min(
        getLefsPosition(root.left,index-1),
        getLefsPosition(root.right,index+1),
        index
    )
}

function bfs(nodes,ys,result){
    const nextNodes = [];
    const nextIndexs = [];
    for(let i=0;i<nodes.length;i++){
        const node = nodes[i];
        const y = ys[i];
        if(!result[y]){
            result[y] = [];
        }
        result[y].push(node.val);
        node.left && nextNodes.push(node.left) && nextIndexs.push(y-1)
        node.right && nextNodes.push(node.right) && nextIndexs.push(y+1);
    }
    nextNodes.length && bfs(nextNodes,nextIndexs,result);
}

