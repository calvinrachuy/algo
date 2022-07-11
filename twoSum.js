// Checking for result before adding index to obj more elegantly handles duplicate value case
// nums: [3, 3, 1, 4]
// target: 6
// => [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const obj = {}
  
  for (let i = 0; i < nums.length; i++) {
      const n = nums[i]
      const match = target - n
      
      if (match in obj) return [obj[match], i]
      
      if (!(n in obj)) obj[n] = i
  }
};

/*
 * LeetCode
 * Runtime: 66 ms, faster than 97.32% of JavaScript online submissions for Two Sum.
 * Memory Usage: 43 MB, less than 33.50% of JavaScript online submissions for Two Sum.
 */
