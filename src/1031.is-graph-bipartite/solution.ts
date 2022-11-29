export class Solution {
    /**
     * @param graph: the given undirected graph
     * @return:  return true if and only if it is bipartite
     */
    isBipartite(graph: number[][]): boolean {
      const colors = new Array<boolean>(graph.length).fill(false);
      const visited = new Array<boolean>(graph.length).fill(false);
      let result = true;
      function dfs(v:number){
        if(!result){
          return;
        }
        visited[v] = true;
        for(const nextV of graph[v]){
          if(!visited[nextV]){
            colors[nextV] = !colors[v];
            dfs(nextV);
          }else if(colors[nextV] === colors[v]){
            result = false;
          }
        }
      }
      for(let i=0;i<graph.length;i++){
        if(!visited[i]){
          dfs(i)
        }
      }
      return result
    }
  }