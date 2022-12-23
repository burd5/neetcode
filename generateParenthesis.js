/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


*/

const generateParenthesis = (n) => {
    const res = [];
  
    const go = (l, r, s) => {
      if (s.length === 2 * n) {
        res.push(s);
        return;
      }
  
      if (l < n) go(l + 1, r, s + '(');
      if (r < l) go(l, r + 1, s + ')');
    };
  
    go(0, 0, '');
    return res;
  };
  

