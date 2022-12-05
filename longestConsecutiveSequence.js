/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/


var longestConsecutive = function(nums){
    if(nums == null || nums.length === 0){
        return 0;
    }

    const set = new Set(nums);
    let max = 0;
    for(let num of nums){
        if(set.has(num - 1)){
            continue;
        }
        let currNum = num;
        let currMax = 1;

        while(set.has(currNum + 1)){
            currNum++
            currMax++
        }
        max = Math.max(max, currMax)
    }
    return max;
}

// similar idea

var longestConsecutive = (nums) => {
    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return search(nums);       /* Time O(N) */
}

const search = (nums) => {
    let [ maxScore, score ] = [ 1, 1 ];

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) continue

        const isStreak = nums[i] === ((nums[i - 1]) + 1)
        if (isStreak) { score++; continue; }

        maxScore = Math.max(maxScore, score);
        score = 1;
    }

    return Math.max(maxScore, score);
}