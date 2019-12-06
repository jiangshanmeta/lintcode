/**
 * @param root: given BST
 * @param minimum: the lower limit
 * @param maximum: the upper limit
 * @return: the root of the new tree 
 */
const trimBST = function (root, minimum, maximum) {
    if(!root){
        return root;
    }
    if(root.val>maximum){
        return trimBST(root.left,minimum,maximum);
    }
    if(root.val<minimum){
        return trimBST(root.right,minimum,maximum);
    }
    root.left = trimBST(root.left,minimum,maximum);
    root.right = trimBST(root.right,minimum,maximum);
    return root;
}