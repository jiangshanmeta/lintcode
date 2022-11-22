class TreeNode {
    val :number;
    left :TreeNode;
    right :TreeNode;
    constructor(val :number) {
        this.val = val;
        this.left = this.right = null;
    }
}

export class Solution {
  /**
   * @param root: A Tree
   * @return: A list of lists of integer include the zigzag level order traversal of its nodes' values.
   */
  zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root){
      return [];
    }
    const result:number[][] = [];
    let ns = [root];
    while(ns.length){
      const vals:number[] = [];
      const nns:TreeNode[] = [];
      for(const n of ns){
        vals.push(n.val);
        if(n.left){
          nns.push(n.left)
        }
        if(n.right){
          nns.push(n.right);
        }
      }
      if(result.length&1){
        vals.reverse()
      }
      result.push(vals);
      ns = nns;
    }

    return result;
  }
}