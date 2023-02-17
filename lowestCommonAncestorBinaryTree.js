/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

*/

// while loop, compare if values are less than or greater than root to navigate through the tree and find the LCA

var lowestCommonAncestor = function(root, p, q) {
    let curr = root;

    while(curr){
        if(p.val > curr.val && q.val > curr.val) curr = curr.right;
        else if(p.val < curr.val && q.val < curr.val) curr = curr.left;
        else return curr;
    }
};
