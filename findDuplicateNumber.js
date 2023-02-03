/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

*/

var findDuplicate = function(nums) {
    let seen = new Set();
    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])) return nums[i]
        seen.add(nums[i])
    }
    return -1;
};

// fast and slow pointers

var findDuplicate = function(nums) {
    let slow = nums[0], fast = nums[nums[0]];
		
    //here fast moves two steps at a time
    while(slow!==fast){
    	slow = nums[slow];
    	fast = nums[nums[fast]];
    }
    fast=0;
		
    //here fast move one step at a time
    while(slow!==fast){
    	slow = nums[slow];
    	fast = nums[fast];
    }
    return slow;
};

//