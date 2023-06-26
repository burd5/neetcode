# 3 Sum Neetcode

"""
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

"""

# Neetcode Solution
# Time - O(n^2)

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        sort_num = sorted(nums)

        for i, val in enumerate(sort_num):
            if i > 0 and sort_num[i - 1] == val:
                continue
            
            l,r = i + 1, len(sort_num) - 1
            while l < r:
                three_sum = val + sort_num[l] + sort_num[r]
                if three_sum > 0:
                    r -= 1
                elif three_sum < 0:
                    l += 1
                else:
                    res.append([val, sort_num[l], sort_num[r]])
                    l += 1
                    while sort_num[l] == sort_num[l - 1] and l < r:
                        l += 1
        return res
