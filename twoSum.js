/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

// nested loop

var twoSum = function(arr, target) {
    for(let i  = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] == target && i !== j){
                return [i,j]
            }
        }
    }
}

// hashmaps

var twoSum = function(nums, target) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let diff = target - nums[i]
        if(diff in obj) return [i,obj[diff]]
        obj[num] =i
    }
 };


 const twoSum = (nums, target)=>{
    const map = new Map();
    let number;
    for(let i=0; i <nums.length; i++){
        number = target - nums[i]
        if(map.has(number)){
            return [map.get(number), i]
        }
        map.set(nums[i], i)
    }
}

