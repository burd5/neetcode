/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/


var isValidBST = function(root) {
    
    if(!root) return true
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    
    function dfs(root, min, max){
        if(!root) 
            return true
        if(root.val <= min || root.val >= max)
            return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
};
