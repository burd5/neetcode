/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.


*/


// recursive

const kthSmallest = (root, k) => {
    let n = 0;
    let res;
    const inorder = (root) => {
      if (!root) return;
      inorder(root.left);
      if (n++ < k) res = root.val;
      inorder(root.right);
    };
    inorder(root);
    return res;
  };

  var kthSmallest = function(root, k) {
    let array = []
    dfs(root)
    return array[k - 1]
    
    function dfs(root){
        if(!root){
            return
        }
        dfs(root.left)
        array.push(root.val)
        dfs(root.right)
    }
};


//iterative

var kthSmallest = function (root, k) {
    const stack = [];
    let count = 1;
    let node = root;
  
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      if (count === k) return node.val;
      else count++;
      node = node.right;
    }
  };


