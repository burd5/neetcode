/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

*/

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    function dfs(root) {
        if (root == null) return 0;
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        
        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return diameter;
};
