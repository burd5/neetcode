/*

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var longestSubstring = function(s){
    const set = new Set();
    let length = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++){
      while(set.has(s[i])){
        set.delete(s[length]);
        length++
      }
  
      set.add(s[i]);
      max = Math.max(max, set.size);
    }
    return max;
  }

  