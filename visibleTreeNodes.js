/*
Visible Tree Node | Number of Visible Nodes
Prereq: DFS on Tree

In a binary tree, we define a node "visible" when no node on the root-to-itself path (inclusive) has a greater value. The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.
*/

/*
Input
5 4 3 x x 8 x x 6 x x
Output
3
*/

/*
function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

function* main() {
    const root = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
    const res = visibleTreeNode(root);
    console.log(res);
}

class EOFError extends Error {}
{
    const gen = main();
    const next = (line) => gen.next(line).done && process.exit();
    let buf = '';
    next();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        const lines = (buf + data).split('\n');
        buf = lines.pop();
        lines.forEach(next);
    });
    process.stdin.on('end', () => {
        buf && next(buf);
        gen.throw(new EOFError());
    });
}
*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function visibleTreeNode(root) {
    if (!root) return 0
  
    let visible = 0
    
    function dfs(node, pathMax) {
        if (!node) return
        if (node.val >= pathMax) {
            pathMax = node.val
            visible++
        }
        dfs(node.left, pathMax)
        dfs(node.right, pathMax)
    }
    
    dfs(root, root.val)
    
    return visible;
}