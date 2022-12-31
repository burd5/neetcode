/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

*/

// my solution

var containsDuplicate = function(nums) {
    return nums.filter( (num, index) => nums.indexOf(num) !== index).length > 0
};

// other solutions (gets more and more efficient)

var containsDuplicate = function(nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],i);
        } else {
            return true;
        }
    }

    return false;
};

var containsDuplicate = function(nums) {
    // return nums.length !== [...new Set(nums)].length;
    return nums.length !== new Set(nums).size
};

var containsDuplicate = function (nums = []) {
	const hashTable = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (hashTable.has(nums[i])) return true;
		else hashTable.set(nums[i], true);
	}
	return false;
};

