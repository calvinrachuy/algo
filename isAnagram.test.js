const runCases = require('./runCases.js')

/*
anagrams
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
*/

function isAnagram(a, b) {
  const normalize = str => str.trim().toLowerCase().split('').sort().join('')
  return normalize(a) === normalize(b)
}
// Time
// Roughly 3a + (a log(a)) + 3b + (b lob(b)) => n + n * log(n) + m + m * log(m)


function isAnagramCharCounts(a, b) {

  function createCounts(string) {
    const counts = {}
    for (const c of string) {
      if (!(c in counts)) counts[c] = 0
      counts[c]++
    }
    return counts
  }
  
  const countsA = createCounts(a)
  const countsB = createCounts(b)
  
  return Object.keys(countsA).every(k => countsA[k] === countsB[k])
}
// Time
// 2a + b => n + m

// Space
// n + m

// This approach can be modified for n Space



const cases = [
  ['restful', 'fluster', true],
  ['cats', 'cats', true],
  ['cats', 'tacs', true],
  ['cats', 'cots', false]
  ['cats', 'cots', false]
]

describe('isAnagram', () => {
  it('works', () => {
    expect(isAnagram('restful', 'fluster')).toBe(true)
    expect(isAnagram('cats', 'cats')).toBe(true)
    expect(isAnagram('cats', 'cots')).toBe(false)
    expect(isAnagram('cats', 'tacs')).toBe(true)
  })
})

describe('isAnagramCharCounts', () => {
  it('works', () => {
    expect(isAnagramCharCounts('restful', 'fluster')).toBe(true)
    expect(isAnagramCharCounts('cats', 'cats')).toBe(true)
    expect(isAnagramCharCounts('cats', 'cots')).toBe(false)
    expect(isAnagramCharCounts('cats', 'tacs')).toBe(true)
  })
})