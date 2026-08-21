const graph = [
    [1, 2],
    [0, 3, 4],
    [0, 5],
    [1],
    [1],
    [2]
];

const DFS = function (graph, start) {
    let stack = [0]
    let set = new Set()
    set.add(0)
    while (stack.length) {
            for (let i = graph[node].length - 1; i >= 0; i--) {
                let node = stack.pop()
                console.log(node)
                if (!set.has(node)) {
                    stack.push(graph[node][i])
                    set.add(graph[node][i])
                }
            }
    }
}

DFS(graph, 0)