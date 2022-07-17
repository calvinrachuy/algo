// Divisible Sum Pairs //
// https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem //

/*
Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

Example



Three pairs meet the criteria:  and .

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains  space-separated integers,  and .
The second line contains  space-separated integers, each a value of .

Constraints

Sample Input

STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
*/

function countDivisibleSumPairs(k, nums) {
  const map = {}
  let res = 0
  
  for (const n of nums) {
    const a = n % k
    const b = (k - a) % k
    if (map[b]) res += map[b]
    if (!(a in map)) map[a] = 0
    map[a] += 1
  }
  
  return res
}

describe('countDivisibleSumPairs', () => {
  test('empty', () => {
    const k = 5
    const nums = []
    const expected = 0
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('single', () => {
    const k = 5
    const nums = [1]
    const expected = 0
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('single value is k', () => {
    const k = 5
    const nums = [5]
    const expected = 0
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('single pair', () => {
    const k = 5
    const nums = [1,4]
    const expected = 1
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('single pair #2', () => {
    const k = 5
    const nums = [1,4,1]
    const expected = 2
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('Example 1', () => {
    const k = 5
    const nums = [1,2,3,4,5,6]
    const expected = 3
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('Test case 0', () => {
    const k = 3
    const nums = [1,3,2,6,1,2]
    const expected = 5
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('Test case 2', () => {
    const k = 2
    const nums = [5,9,10,7,4]
    const expected = 4
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
  
  test('Test case 4', () => {
    const k = 3
    const nums = [29,97,52,86,27,89,77,19,99,96]
    const expected = 15
    
    const actual = countDivisibleSumPairs(k, nums)
    
    expect(actual).toBe(expected)
  })
})