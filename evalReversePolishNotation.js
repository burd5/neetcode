/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

*/

function evalRPN(tokens) {
    let stack = [];
    let ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };
    for (let t of tokens) {
      if (ops[t]) {
        let top = stack.pop();
        let second = stack.pop();
        stack.push(ops[t](second, top));
      } else {
        stack.push(Number(t));
      }
    }
    return stack.pop();
  };

  // same idea

  var evalRPN = function(tokens) {
    let stack = [];

    let operators = {
        '+': (num1,num2) => num1 + num2,
        '-': (num1,num2) => num1 - num2,
        '*': (num1,num2) => num1 * num2,
        '/': (num1,num2) => Math.trunc(num1/num2)
    }

    for(let token of tokens){
        if(operators[token]){
            let num2 = stack.pop();
            let num1 = stack.pop();
            
            stack.push(operators[token](num1,num2));
        } else{
            stack.push(parseInt(token))
        }
    }

    return stack.pop();
};