/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


# nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
#
# i  Window position             Monotonic queue  max
# 0                              [1]              -
# 1                              [3]              -
# 2  [1  3  -1] -3  5  3  6  7   [3, -1]          3
# 3   1 [3  -1  -3] 5  3  6  7   [3, -1, -3]      3
# 4   1  3 [-1  -3  5] 3  6  7   [5]              5
# 5   1  3  -1 [-3  5  3] 6  7   [5, 3]           5
# 6   1  3  -1  -3 [5  3  6] 7   [6]              6
# 7   1  3  -1  -3  5 [3  6  7]  [7]              7

# nums = [1, 3, -1, 8, 5, 3, 6, 7], k = 3
#
# i  Window position            Monotonic queue  max
# 0                             [1]              -
# 1                             [3]              -
# 2  [1  3  -1] 8  5  3  6  7   [3, -1]          3
# 3   1 [3  -1  8] 5  3  6  7   [8]              8
# 4   1  3 [-1  8  5] 3  6  7   [8, 5]           5
# 5   1  3  -1 [8  5  3] 6  7   [8, 5, 3]        5
# 6   1  3  -1  8 [5  3  6] 7   [6]              6
# 7   1  3  -1  8  5 [3  6  7]  [7]              7

*/

const maxSlidingWindow = (nums, k) => {
    const res = [];
    const q = [];
  
    for (let i = 0; i < nums.length; i++) {
      while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
      q.push(nums[i]);
  
      // When i + 1 - k >= 0, the window is fully overlapping nums
      const j = i + 1 - k;
      if (j >= 0) {
        res.push(q[0]);
        if (nums[j] === q[0]) q.shift(); // If the biggest element in q is about to exit window, remove it from q
      }
    }
    return res;
  };