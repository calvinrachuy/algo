// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
  if (!root) return null
  
  let stack = [root]
  const nodeParents = new Map()
  
  while (stack.length) {
    let current = stack.pop()
    
    if (current.val === target) {
      const path = [current.val]
      while (nodeParents.has(current)) {
        path.push(nodeParents.get(current).val)
        current = nodeParents.get(current)
      }
      return path.reverse()
    }
    
    if (current.right) {
      stack.push(current.right)
      nodeParents.set(current.right, current)
    }
    if (current.left) {
      stack.push(current.left)
      nodeParents.set(current.left, current)
    }
  }
  
  return null
};

















module.exports = {
  pathFinder
};