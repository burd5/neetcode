/*

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

*/

// sliding window

const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};
  
    while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;
  
      if (visited[char] > maxCharCount) maxCharCount = visited[char];
  
      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }
  
      right++;
    }
  
    return right - left;
  };

// other sliding window

var characterReplacement = function(s, k) {
    let left = 0, right = 0, mostFreq = 0, maxLen = 0;
    let freqMap = {};
    
    for(right = 0; right < s.length; right++) {
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        mostFreq = Math.max(freqMap[s[right]], mostFreq);
        
        while(right-left+1 - mostFreq > k) {
            freqMap[s[left]] -= 1;
            left++;
        }
        maxLen = Math.max(right-left+1, maxLen);
    }
    return maxLen;
};
