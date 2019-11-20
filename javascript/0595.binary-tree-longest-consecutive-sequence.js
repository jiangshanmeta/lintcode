/**
 * @param root: the root of binary tree
 * @return: the length of the longest consecutive sequence path
 */
const longestConsecutive = function (root) {
    return helper(root,-Infinity,0)
}

function helper(root,last,count){
    if(!root){
        return count;
    }
    if(root.val === last+1){
        return Math.max(
            helper(root.left,root.val,count+1),
            helper(root.right,root.val,count+1)
        );
    }else{
        return Math.max(
            helper(root.left,root.val,1),
            helper(root.right,root.val,1),
            count
        );
    }
}