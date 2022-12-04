/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/

// linear js solution

var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};

// walkthrough

// first loop

result[0] = 1
productSoFar = 1

result = [1]

// second loop

result[1] = 1
productSoFar = 2

result = [1,1]

// third loop

result[2] = 2
productSoFar = 6

result = [1,1,2]

// fourth loop

result[3] = 6
productSoFar = 24

result = [1,1,2,6]

// second loop (first time)
productSoFar = 1
result = [1,1,2,6]

result[3] = 6
productSoFar = 4

result[2] = 8
productSoFar = 12

result[1] = 12
productSoFar = 24

result[0] = 24

result = [24,12,8,6]

