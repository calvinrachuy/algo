class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
  const paths = []
  
  function dfs(root, path) {
    const _path = [...path, root.val]
    
    // if (leaf) paths.push(path)
    if (!root.left && !root.right) {
      paths.push(_path)
      return
    }
    
    // else dfs(left); dfs(right)
    if (root.left) dfs(root.left, _path)
    if (root.right) dfs(root.right, _path)
  }
  
  dfs(root, [])
  return paths
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 














module.exports = {
  allTreePaths
};