/*

Given a binary tree, determine if it is  height-balanced

*/

// DFS - shorter way to write it

var isBalanced = function(tree) {
	let isBalanced = true
	function dfs(t){
		if(!t) return 0
		const left = dfs(t.left)
		const right = dfs(t.right)
		if(Math.abs(left-right) > 1){
			isBalanced = false
		}
		return 1 + Math.max(left, right)
	}
	dfs(tree)
  return isBalanced;    
};

// Recursive DFS

var isBalanced = function(root) {

    function dfs(root){
    if (root == null) return [true, 0];

    let left = dfs(root.left)
    let right = dfs(root.right)

    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])]
    }

    return dfs(root)[0]
};