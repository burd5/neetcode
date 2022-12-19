/*

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

*/


function minWindow (base, target) {
    let left = 0;
    const map = new Map();
    for (const char of target) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    let zeroCounter = 0;
    let k1;
    let k2;
    let min = Infinity;
    for (let right = 0; right < base.length; right++) {
      const char = base[right];
      if (map.has(char)) {
        const val = map.get(char) - 1;
        map.set(char, val);
        if (val === 0) {
          zeroCounter++;
          while (zeroCounter === map.size) {
            const char = base[left];
            if (map.has(char)) {
              const val = map.get(char) + 1;
              if (val === 1) {
                zeroCounter--;
                if (right - left < min) {
                  min = right - left + 1;
                  k1 = left;
                  k2 = right;
                }
              }
              map.set(char, val);
            }
            left++;
          }
        }
      }
    }
    return base.slice(k1, k2 + 1)
  }


  // 

  var minWindow = function(s, t) {
    
    // lets create a map to store the frequency of each window char
    const map = new Map();
    
    // set the map count
    for (let i = 0; i < t.length; i++)
    {
    if (map.has(t.charAt(i)))
        {
        map.set(t.charAt(i), map.get(t.charAt(i)) + 1)
        } else 
            {
                map.set(t.charAt(i), 1)
            }
    }
    
    let begin = 0, end = 0, counter = map.size, len = Number.MAX_VALUE, ans = '';
    
    // since end is starting at 0, we will loop while end is smaller than the length of the string to examime
    while(end < s.length)
    {
        // lets get the end char, which for the first iteration, is really the starting char in the string
        const endChar = s.charAt(end);
        
       // if the map has the char, lets decrement the count by 1. If the count is 0, we can decrement the overall counter 
       if (map.has(endChar)){
           map.set(endChar, map.get(endChar) - 1);
           if (map.get(endChar) === 0) counter --;
       }
        
        // slide the end character to the right
        end++;

        // if all characters have been viewed in the substring as many times as needed, continue
        while (counter === 0){
            // calculate new length, if smaller than previous, set new length and answer
            if (end - begin < len){
                len = end - begin;
                ans = s.substring(begin, end);
            }
            
            // start char sliding to the right. for first iteration will be str.charAt(0)
            let startChar = s.charAt(begin);
            
            // if this character is part of the map, set its count up one
            if (map.has(startChar)){
                map.set(startChar, map.get(startChar) + 1)
                // if the count of one of the characters is greater than one, set the counter up again.
                if (map.get(startChar) > 0) counter++;
                
            }
            
            // slide begin to the right
            begin++;
        }
        
    }
    
    return ans;
    
};