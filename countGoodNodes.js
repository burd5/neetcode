/*

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

*/


var goodNodes = function(root) {
    let good = 0;
    function trav(node, max){
        if(!node) return;
        if(node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max); 
    }
    trav(root, root.val);
    return good;
    
};