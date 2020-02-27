/**
 * @param root1: the first tree
 * @param root2: the second tree
 * @return: returns whether the leaf sequence is the same
 */
const leafSimilar = function (root1, root2) {
    const leaves1 = [];
    const leaves2 = [];
    dfs(root1,leaves1);
    dfs(root2,leaves2);
    if(leaves1.length !== leaves2.length){
        return false;
    }
    for(let i=0;i<leaves1.length;i++){
        if(leaves1[i] !== leaves2[i]){
            return false;
        }
    }
    return true;
}

function dfs(root,result){
    if(!root.left && !root.right){
        result.push(root.val);
        return ;
    }
    root.left && dfs(root.left,result);
    root.right && dfs(root.right,result);
}