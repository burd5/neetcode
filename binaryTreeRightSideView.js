/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

*/


var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    function pre(node, h) {
    if (!node) return;
    res[h] = node.val;
    pre(node.left, h+1);
    pre(node.right, h+1);
    }
    };
    
    var rightSideView = function(root) {
    const result = [];
    const queue = [];
    if (root === null) return result;
    queue.push(root);
    while(queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
    let n = queue.shift();
    if (i === size - 1) result.push(n.val);
    if (n.left !== null) queue.push(n.left);
    if (n.right !== null) queue.push(n.right);
    }
    }
    return result;
    };