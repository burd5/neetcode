/*

Given the root of a binary tree, invert the tree, and return its root.

*/

function invertTree(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  }