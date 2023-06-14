# Group Anagrams
import collections

"""
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

"""

# My Solution Using Dictionary
# Time Complexity O(nlogn)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ana = {}
        for val in strs:
            letters = str(sorted(val))
            if letters in ana:
                ana[letters].append(val)
            else:
                ana[letters] = [val]
        return ana.values()
    
# Optimized Solution
# Time Complexity O(m * n)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            ans[tuple(count)].append(s)
        return ans.values()