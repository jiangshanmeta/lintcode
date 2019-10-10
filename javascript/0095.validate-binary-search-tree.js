/**
 * @param root: The root of binary tree.
 * @return: True if the binary tree is BST, or false
 */
const isValidBST = function (root) {
    if(!root){
        return true;
    }
    return helper(root,-Infinity,Infinity);
}

function helper(node,min,max){
    if(node.val>=max || node.val<=min){
        return false;
    }
    if(node.left && node.right){
        return helper(node.left,min,node.val) && helper(node.right,node.val,max);
    }else if(node.left){
        return helper(node.left,min,node.val);
    }else if(node.right){
        return helper(node.right,node.val,max);
    }
    return true;
}