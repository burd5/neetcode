/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

*/

// what to do if input is invalid? Throw error?
// how do you want the answer returned

var trap = function(array) {
       
    let leftArray = new Array(array.length).fill(0);
    let left =0;
    
    for(let i =0; i < array.length; i++){
      
      const height = array[i];
      leftArray[i] = left; 
      left = Math.max(left, height)
    }
    
      
    let right = 0;
    for(let i = array.length - 1;i >= 0; i--){
      const height = array[i];
      const minHeight = Math.min(leftArray[i],right);
      
      if(height < minHeight){
         leftArray[i] = minHeight-height;
      }else{
        leftArray[i] = 0;
         } 
      
       right = Math.max(right, height)
    }
    
    return leftArray.reduce((a,b)=> a + b,0)
  };

  // other solutions

  var trap = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
    
};