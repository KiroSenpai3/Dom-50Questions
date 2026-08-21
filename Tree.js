let queue = [root]

let node = queue.shift()
if(node.left) queue.push(node.left)
if(node.right) queue.push(node.right)

let stack = [root]

while(stack.length){
    let node = stack.pop()
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
}