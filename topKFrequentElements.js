/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/

var topKFrequent = function(nums, k) {
    if(nums.length == k){
        return nums;
    }
    let count = {};
    for(let i = 0; i < nums.length; i++){
        if(count[nums[i]]){
            count[nums[i]]++
        } else {
            count[nums[i]] = 1;
        }
    }

    let values = Object.values(count).sort( (a,b) => a - b).slice(-k);
    let answer = Object.keys(count).filter( function(key) {
        for(let i = 0; i < values.length; i++){
            if(count[key] == values[i]){
                return count[key]
            }
        }
    });
    return answer;
};

// other solutions

var topKFrequent = function(nums, k) {
    let obj = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  let arr = Object.entries(obj); //taken entries
  arr = arr.sort((a, b) => b[1] - a[1]); //sorted array
  arr = arr.slice(0, k);
  arr.forEach((value) => result.push(+value[0]));

  return result;
};

// 