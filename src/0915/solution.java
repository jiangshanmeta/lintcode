/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
}


public class Solution {
    /**
     * @param root: the given BST
     * @param p: the given node
     * @return: the in-order predecessor of the given node in the BST
     */
    public TreeNode inorderPredecessor(TreeNode root, TreeNode p) {
        if (root == null || p == null){
            return null;
        }
        if(root == p){
            TreeNode left = root.left;
            while(left != null && left.right != null){
                left = left.right;
            }
            return left;
        }
        if(root.val>p.val ){
            return inorderPredecessor(root.left, p);
        }

        TreeNode right = inorderPredecessor(root.right, p);

        if(right == null){
            return root;
        }
        return right;
    }
}