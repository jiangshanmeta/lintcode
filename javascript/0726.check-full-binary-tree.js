/**
 * @param root: the given tree
 * @return: Whether it is a full tree
 */
const isFullTree = function (root) {
    if(!root){
        return true;
    }
    if(root.left && root.right){
        return isFullTree(root.left) && isFullTree(root.right);
    }else if(!root.left && !root.right){
        return true;
    }
    return false;
}