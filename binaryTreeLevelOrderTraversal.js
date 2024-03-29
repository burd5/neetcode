/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

*/

// bfs

var levelOrder = function(root) {
    let result = [];
    currentLevelNodes = [];
    if(root) 
        currentLevelNodes.push(root);
    while(currentLevelNodes.length > 0) {
        current = [];
        let len = currentLevelNodes.length;
        for (let i = 0; i< len; i++) {
            let node = currentLevelNodes.shift();
            current.push(node.val);
            if(node.left) {
                currentLevelNodes.push(node.left);
            }
            if(node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        result.push(current);
    }
    return result;
};