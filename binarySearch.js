/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

*/

var search = function (nums, target) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = Math.floor((left + right)/2)
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return -1;
};

var search = function(nums, target) {
    var lo = 0,
        hi = nums.length - 1,
        mid;

    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        if (nums[mid] == target)
            return mid;
        if (nums[mid] < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }

    return -1;
};