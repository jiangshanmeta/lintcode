/**
 * @param root: the root
 * @return: the same tree where every subtree (of the given tree) not containing a 1 has been removed
 */
const pruneTree = function (root) {
    if(!root){
        return root;
    }
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if(!root.left && !root.right && root.val === 0){
        return null;
    }
    return root;
}