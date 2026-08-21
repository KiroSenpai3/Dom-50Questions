const graph = [
    [1,2],
    [0,3,4],
    [0,5],
    [1],
    [1],
    [2]
];

const BFS = function(graph, start){
    let queue = [start]
    let visited = new Set()
    visited.add(start)
    while(queue.length){
        let node = queue.shift()
        console.log(node)
        for(let a of graph[node]){
            if(!visited.has(a)){
                queue.push(a)
                visited.add(a)
            }
        }
    }
}

BFS(graph, 0)