export class Solution {
    /**
     * @param n: the number of vertices
     * @param edges: the edges of undirected graph
     * @return: the number of connected components
     */
    countComponents (n: number, edges: number[][]): number {
        const graph = new Array<number[]>(n);
        for (let i = 0; i < n; i++) {
            graph[i] = [];
        }
        for (const [a, b, ] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }
        let result = 0;
        const marks = new Array<boolean>(n);

        for (let i = 0; i < n; i++) {
            if (marks[i]) {
                continue;
            }
            result++;
            const stack = [i, ];
            marks[i] = true;
            while (stack.length) {
                const j = stack.pop()!;
                for (const to of graph[j]) {
                    if (marks[to]) {
                        continue;
                    }
                    stack.push(to);
                    marks[to] = true;
                }
            }
        }

        return result;
    }
}
