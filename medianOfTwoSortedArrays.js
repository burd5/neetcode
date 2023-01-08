/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

*/

var findMedianSortedArrays = function(nums1, nums2) {
    // To make sure first input array always shorter in length
        if(nums1.length > nums2.length){
            return findMedianSortedArrays(nums2, nums1);
        }
        let x = nums1.length;
        let y = nums2.length;
        let start = 0;
        let end = x;
        
        while(start <= end){
            
            const posX = Math.floor(start + (end - start) / 2);
            const posY = Math.floor((x + y + 1) / 2) - posX;
            
            const maxLeftX = posX === 0 ? -Infinity : nums1[posX - 1];
            const minRightX = posX === x ? Infinity : nums1[posX];
            
            const maxLeftY = posY === 0 ? -Infinity : nums2[posY - 1];
            const minRightY = posY === y ? Infinity : nums2[posY];
            
            if(maxLeftX <= minRightY && maxLeftY <= minRightX){
                if((x + y) % 2 === 0){
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            } else if(maxLeftX > minRightY){
                end = posX - 1;
            } else {
                start = posX + 1;
            }
            
        }
    };

