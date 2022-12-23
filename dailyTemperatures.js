/*

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

// intuitive answer, doesn't work with extremely large numbers

var dailyTemperatures = function(temperatures) {
    // left and right counters
    let left = 0;
    let right = left + 1;
    // final answer array
    let answer = [];
    // while loop
    while(left < temperatures.length){
      if(temperatures[right] > temperatures[left]){
        answer.push(right - left)
        left++
        right = left + 1
      } else if(temperatures[left] >= temperatures[right]){
        right++
      } else{
        answer.push(0);
        left++
        right = left + 1
      }
    }
    // return answer
    return answer;
};

// stack answer

/*
TOPIC:monotonic stack. find first greater element that mean need maintain stack is decreasing order 
STEP:create stack store index. If cur > stack[-1] pop and mark res
*/

var dailyTemperatures = function(temperatures) {
    if (temperatures === null || temperatures.length == 0) return [];
    const res = new Array(temperatures.length).fill(0); //store index diff
    const stack = []; //store index
    for (let i = 0; i < temperatures.length; i++){
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let topIndex = stack.pop();
            res[topIndex] = i-topIndex;
        }
        stack.push(i);
    }
    return res;
};