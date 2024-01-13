export class Solution {
    /**
     * @param graph: a 2D array
     * @return: all possible paths from node 0 to node N-1
     *          we will sort your return value in output
     */
    allPathsSourceTarget (graph: number[][]): number[][] {
        const N = graph.length;
        const result:number[][] = [];
        const dfs = (index:number, seq:number[]) => {
            if (index === N - 1) {
                result.push([...seq, ]);
                return;
            }
            for (const next of graph[index]) {
                seq.push(next);
                dfs(next, seq);
                seq.pop();
            }
        };
        dfs(0, [0, ]);
        return result;
    }
}
