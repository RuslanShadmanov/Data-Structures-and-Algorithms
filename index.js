// date: 12/22

// Problem: https://leetcode.com/problems/unique-number-of-occurrences/description/

// create obj
// loop though the arr, add the key and add the freq. for the value
// if the key is already in obj, we will increment the freq.
// create the set - set of unique values
// loop thoruhg the map.values and check if the value id in the ser
// if the value in set we will retrun false
// if the value not in the set, we add to the set
// return true

//arr = [1,2,2,1,1,3]

// obj = {
//     1 : 3,
//     2: 2,
//     3: 1,
// }

var uniqueOccurrences = function (arr) {
    const obj = {};
  
    for (const num of arr) {
      if (obj.hasOwnProperty(num)) {
        obj[num]++;
      } else {
        obj[num] = 1;
      }
    }
    const setOne = new Set();
    const vals = Object.values(obj);
  
    for (const value of vals) {
      if (setOne.has(value)) {
        return false;
      } else {
        setOne.add(value);
      }
    }
    return true;
  };
  // time complex. O(n)
  // space complex. O(n) Mention: O(1000) => O(1) if we know the constraint
  
  // [1,2,2,1,1,3]
  // frequencies = {
  //     1: 3,
  //     2: 2,
  //     3: 1
  // }
  
  // occurences = [3, 2, 1]
  // occurencesMap = {
  //     3: 1,
  //     2: 1,
  //     1: 1
  // }
  
  // vals = [1, 1, 1]
  
  // var uniqueOccurrences  = function(arr) {
  //     const frequencies = buildObjectFromArray(arr);
  //     const occurences = Object.values(frequencies);
  //     const occurencesMap = buildObjectFromArray(occurences);
  //     const vals = Object.values(occurencesMap);
  //     return vals.every(el => el === 1)
  // }
  
  // function buildObjectFromArray(array) {
  //     const obj = {};
  //     for (const num of array) {
  //         if (!obj.hasOwnProperty(num)) {
  //             obj[num] = 1;
  //         } else {
  //             obj[num]++;
  //         }
  //     }
  //     return obj;
  // }
  
  var uniqueOccurrences = function (arr) {
    const frequencies = buildObjectFromArray(arr);
    const occurences = Object.values(frequencies);
    const occurencesMap = {};
    for (const occurence of occurences) {
      if (!occurencesMap.hasOwnProperty(occurence)) {
        occurencesMap[occurence] = 1;
      } else {
        return false;
      }
    }
    return true;
  };
  
  // create two pointers
  // left = 0, right = array.length - 1
  // while left pointer less than right pointer
  // get the currentSum of number at left index and right index
  // if the currentSum is equal to 0
  // return both numbers
  // else if currentSum is negative
  // move left pointer to the right
  // otherwise if currentSum is above 0
  // then move right pointer to the left
  
  // return undefined
  
  // Pattern Two Pointers
  function sumZero(array) {
    let left = 0,
      right = array.length - 1;
    while (left < right) {
      const currentSum = array[left] + array[right];
      if (currentSum === 0) {
        return [array[left], array[right]];
      } else if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
    return undefined;
  }
  
  sumZero([-10, -7, -5, -3, 5, 8, 11]);
  //        0    1   2   3  4  5  6
  //                 L      R
  
  // l   r   currentSum
  // 0   6    1
  // 0   5    -2
  // 1   5    1
  // 1   4    -2
  // 2   4    0
  
  // Problem to solve on your own using multiple pointer pattern
  /* Write a function called sumToNumber which accepts a sorted array of integers annd target number. The function should find the first pair in array that sums up to target number. Return an array that includes both values that sum to target number or undefined if a pair does not exist */
  
  // sumToNumber([1, 2, 3, 4, 5, 6, 10], 9) return [3, 6]
  // sumToNumber([-8, -5, -3, 0, 1, 2, 3, 4, 5, 7], 1) return [-3, 4]
  // sumToNumber([-8, -5, -3, 0, 2], 1) return undefined
  
  // Homework: https://leetcode.com/problems/squares-of-a-sorted-array/
  
  // arr = [1, 2, 3, 4, 5, 6, 10]
  //        0  1  2  3  4  5  6
  //        l                 r
  //                    r
  
  // []
  //  left = 0
  //  right = arr.length - 1
  // currentSum = arr[left] + arr[right]
  // 1. if currentSum is equal to targetNum
  // return [arr[left], arr[right]]
  // 2. if currentSum is bigger than targetNum
  //   move right pointer to the left
  // 3. if currentSum is smaller than targetNum
  //   move left pointer to the right
  
  function sumToNumber(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === target) {
        return [arr[left], arr[right]];
      } else if (currentSum > target) {
        right--;
      } else {
        left++;
      }
    }
    return undefined;
  }
  //TC: O(n) where n is arr.length
  //SC: O(1)
  
  // console.log(sumToNumber([-8, -5, -3, 0, 1, 2, 3, 4, 5, 7], 1))
  // console.log(sumToNumber([1, 2, 3, 4, 5, 6, 10], 9))
  // console.log(sumToNumber([-8, -5, -3, 0, 2], 1))
  //                        0  1    2  3  4
  //                                   l
  //                                   r
  // l  r  cS
  // 0  4  -6
  // 1  4  -3
  // 2  4  -1
  // 3  4   2
  // 3  3
  
  //Leetcode 977.
  // Time complexity: O(100000) => O(n)
  // Space complexity: O(n)
  // nums = [ -4,-1,0,3,10 ]
  //              e s
  // res = [0 1 9 16 100]
  // res = [], start = 0, end = len - 1
  // for loop end i-- ; i >= 0
  //             if math.abs( )nums at strart < abs nums at end
  //               res[i] == nums[end] ** 2
  //               end--
  // otherwise we store the integer nums[start] squared into result array and shift the startign pointer right
  
  var sortedSquares = function (nums) {
    const res = [];
    let start = 0;
    let end = nums.length - 1;
  
    for (let i = nums.length - 1; i >= 0; i--) {
      if (Math.abs(nums[start]) < Math.abs(nums[end])) {
        res[i] = nums[end] ** 2;
        end = end - 1;
      } else {
        res[i] = nums[start] ** 2;
        start = start + 1;
      }
    }
    return res;
  };
  
  // TC: O(n)
  // SC: O(n)
  
  // Sliding Window
  // Problem 1
  /* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.*/
  
  // find the sum of first k elements
  // move the window to the right
  // in every itereation remove the el in k positions to the left and add the next el to the right to the current sum
  // keep track maxSum, if current sum is higher than maxsum, update it
  // return the maxSum
  
  function maxSubarraySum(array, k) {
    if (array.length < k) return null;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
      maxSum += array[i];
    }
    let tempSum = maxSum;
    for (let i = k; i < array.length; i++) {
      tempSum = tempSum + array[i] - array[i - k];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
  console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
  
  // 1 + 2 + 5 + 2 = 10
  //     2 + 5 + 2 + 8 = 17 maxsum
  //         5 + 2 + 8 + 1 = 16
  //             2 + 8 + 1 + 5 = 16
  
  // 1 + 2 + 5 + 2 = 10
  // sum -
  //     2 + 5 + 2 + 8 = 17 maxsum
  //         5 + 2 + 8 + 1 = 16
  //             2 + 8 + 1 + 5 = 16
  
  // maxSubarraySum([4,2,1,6],1) // 6
  // maxSubarraySum([4,2,1,6,2],4) // 13
  // maxSubarraySum([],4) // null
  
  // Problem 2
  //https://leetcode.com/problems/minimum-size-subarray-sum/description/
  