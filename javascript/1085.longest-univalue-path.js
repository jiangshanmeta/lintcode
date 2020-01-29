/**
 * @param root: 
 * @return: the length of the longest path where each node in the path has the same value
 */
const longestUnivaluePath = function (root) {
    return postOrder(root)[0]-1;
}

function postOrder(root){
    // 返回三个值的含义
    // 1. 以root为根节点的子树中遇到的最长相同路径的节点数的最大值
    // 2. 和root值相等的 一直向下的路径的节点数的最大值
    // 3. 根节点的值
    if(!root){
        return [1,1,NaN];
    }
    
    
    let rootResult = 1;
    
    const [leftTotal,leftRoot,leftVal] = postOrder(root.left);
    
    if(leftVal === root.val){
        rootResult = Math.max(rootResult,1+leftRoot);
    }
    
    const [rightTotal,rightRoot,rightVal] = postOrder(root.right);
    if(rightVal === root.val){
        rootResult = Math.max(rootResult,1+rightRoot);
    }
    // 左右都有和根节点值相等的情况
    let throughResult = 1;
    if(root.val === leftVal && root.val === rightVal){
        throughResult = 1+leftRoot+rightRoot;
    }
    return [
        Math.max(
            leftTotal,
            rightTotal,
            throughResult,
            rootResult
        ),
        rootResult,
        root.val,
    ];
}