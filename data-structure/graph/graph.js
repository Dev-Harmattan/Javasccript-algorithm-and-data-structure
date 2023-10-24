class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (edge) => edge !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (edge) => edge !== v1
    );
  }

  removeVertex(v1) {
    while (this.adjacencyList[v1].length) {
      let adjacentVertex = this.adjacencyList[v1].pop();
      this.removeEdge(v1, adjacentVertex);
    }
    delete this.adjacencyList[v1];
  }
  DFSRecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  BFS(start) {
    let vertex;
    let queue = [];
    let data = [];
    let visited = {};
    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      let vertex = queue.shift();
      data.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return data;
  }
}

let graph = new Graph();
graph.addVertex('Nigeria');
graph.addVertex('Ghana');
graph.addVertex('Zimbabwe');
graph.addVertex('Ivory coast');
graph.addVertex('Egypt');
graph.addEdge('Nigeria', 'Ghana');
graph.addEdge('Ghana', 'Nigeria');
graph.addEdge('Zimbabwe', 'Ghana');
// graph.removeEdge('Nigeria', 'Ghana');
graph.addEdge('Zimbabwe', 'Ghana');
graph.addEdge('Egypt', 'Ghana');
graph.addEdge('Ghana', 'Ivory coast');
// graph.removeVertex('Nigeria');
console.log(graph.BFS('Ghana'));
