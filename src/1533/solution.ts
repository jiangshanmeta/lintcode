
class UndirectedGraphNode {
    label :number;
    neighbors :UndirectedGraphNode[];
    constructor (x :number) {
        this.label = x;
        this.neighbors = [];
    }
}

export class Solution {
    /**
   * @param root: the tree root
   * @return: the order level of this tree
   */
    levelOrder (root: UndirectedGraphNode): number[][] {
        if (!root) {
            return [];
        }
        const result:number[][] = [];
        let ns = [root, ];
        while (ns.length) {
            const vals:number[] = [];
            const nns:UndirectedGraphNode[] = [];
            for (const node of ns) {
                vals.push(node.label);
                nns.push(...node.neighbors);
            }
            result.push(vals);
            ns = nns;
        }
        return result;
    }
}
