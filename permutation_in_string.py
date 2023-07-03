# Permuation in String
# Neetcode - Sliding Window

"""
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

"""

# My Solution (with help)

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        window = len(s1)
        count_s1 = Counter(s1)
        for i in range(len(s2) - window + 1):
            count_s2 = Counter(s2[i:i + window])
            if count_s2 == count_s1:
                return True
        return False
    
# Neetcode Solution

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1Count, s2Count = [0] * 26, [0] * 26
        for i in range(len(s1)):
            s1Count[ord(s1[i]) - ord("a")] += 1
            s2Count[ord(s2[i]) - ord("a")] += 1

        matches = 0
        for i in range(26):
            matches += 1 if s1Count[i] == s2Count[i] else 0

        l = 0
        for r in range(len(s1), len(s2)):
            if matches == 26:
                return True

            index = ord(s2[r]) - ord("a")
            s2Count[index] += 1
            if s1Count[index] == s2Count[index]:
                matches += 1
            elif s1Count[index] + 1 == s2Count[index]:
                matches -= 1

            index = ord(s2[l]) - ord("a")
            s2Count[index] -= 1
            if s1Count[index] == s2Count[index]:
                matches += 1
            elif s1Count[index] - 1 == s2Count[index]:
                matches -= 1
            l += 1
        return matches == 26
    
# Other Optimized Solution

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2): return False
        need = {}
        have = {}

        for char in s1:
            if char in need:
                need[char] += 1
            else:
                need[char] = 1
                have[char] = 0

        for i in range(len(s1)):
            if s2[i] in need:
                have[s2[i]] += 1 

        left = 0
        if need == have:
            return True
        
        for i in range(len(s1), len(s2)):
            if s2[left] in need:
                have[s2[left]] -= 1

            left += 1
            if s2[i] in need:
                have[s2[i]] += 1

            if need == have:
                return True

        
        return False