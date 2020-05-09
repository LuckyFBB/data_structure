/*
 * @Author: FBB
 * @Date: 2020-05-09 15:21:41
 * @LastEditors: FBB
 * @LastEditTime: 2020-05-09 16:54:13
 * @Description: 图
 */

//使用邻接表构建图
class Graph {
  constructor(vertices = []) {
    this.vertices = vertices; //用来存储顶点
    this.adjList = new Map(); //用来存储边
    this.vertices.length && this.__buildGraph();
  }

  //添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  //添加边
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  //把邻接表转化成字符串的形式，便于输出显示
  toString() {
    let s = "";
    this.vertices.forEach((item) => {
      s += `${item}->`;
      let neighbors = this.adjList.get(item);
      neighbors.forEach((neighbor) => {
        s += `${neighbor} `;
      });
      s += "\n";
    });
    return s;
  }

  //广度优先遍历
  bfs(v, cb) {
    const color = this.__initializeColor();
    const queue = [];
    queue.push(v);
    while (queue.length) {
      const curr = queue.shift(); //获取到当前的节点
      color[curr] = "grey"; //当前节点被访问，设置为grey
      const neighbors = this.adjList.get(curr); //拿到当前节点的所有边
      neighbors.forEach((neighbor) => {
        if (color[neighbor] === "white") {
          //如果探索到的子节点是尚未被访问过，就变为grey并且加入队列
          color[neighbor] = "grey";
          queue.push(neighbor);
        }
      });
      color[curr] = "black"; //节点完成搜索和探索的过程，直接变黑
      cb && cb(curr); //如果有callback，就对当前节点执行callback
    }
  }

  //深度优先遍历
  dfs(v, cb) {
    const color = this.__initializeColor();
    this.__dfsVisit(v, color, cb);
  }

  __dfsVisit(v, color, cb) {
    color[v] = "grey";
    cb && cb(v);
    const neighbors = this.adjList.get(v);
    neighbors.forEach((neighbor) => {
      color[neighbor] === "white" && this.__dfsVisit(neighbor, color, cb);
    });
    color[v] = "black";
  }

  //如果传入了参数，构建成图
  __buildGraph() {
    this.vertices.forEach((item) => this.adjList.set(item, []));
  }

  //初始化每个顶点的颜色，用于遍历时使用
  __initializeColor() {
    let color = [];
    for (let i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = "white";
    }
    return color;
  }
}
