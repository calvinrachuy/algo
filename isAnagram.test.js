// Compare counts in single loop

/**
 * Runtime: 119 ms, faster than 54.99% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 42.3 MB, less than 95.06% of JavaScript online submissions for Valid Anagram.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagramCharCounts = function(s, t) {
  if (s.length !== t.length) return false
  
  const counts = {}
  
  for (let i = 0; i < s.length; i++) {
      const a = s[i]
      const b = t[i]
      if (!(a in counts)) counts[a] = 0
      if (!(b in counts)) counts[b] = 0
      counts[a]++
      counts[b]--
  }
  
  return Object.values(counts).every(v => v === 0)
};

/**
 * Build string of counts
 * Faster, No sorting
 * Runtime: 92 ms, faster than 85.20% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 44.2 MB, less than 51.08% of JavaScript online submissions for Valid Anagram.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagramHashString = function(s, t) {
  return hashWord(s) === hashWord(t)
};

function hashWord(word) {
  const counts = {}
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  for (const letter of letters) {
      counts[letter] = 0
  }
  
  for (const char of word) {
      counts[char]++
  }

  return Object.entries(counts).join('')
}

describe('isAnagram', () => {
  it('works', () => {
    expect(isAnagramHashString('restful', 'fluster')).toBe(true)
    expect(isAnagramHashString('cats', 'cats')).toBe(true)
    expect(isAnagramHashString('cats', 'tacs')).toBe(true)
    expect(isAnagramHashString('cats', 'cots')).toBe(false)
    expect(isAnagramHashString('cats', 'cat')).toBe(false)
    expect(isAnagramHashString('cat', 'cats')).toBe(false)
  })
})

describe('isAnagramCharCounts', () => {
  it('works', () => {
    expect(isAnagramCharCounts('restful', 'fluster')).toBe(true)
    expect(isAnagramCharCounts('cats', 'cats')).toBe(true)
    expect(isAnagramCharCounts('cats', 'tacs')).toBe(true)
    expect(isAnagramCharCounts('cats', 'cots')).toBe(false)
    expect(isAnagramCharCounts('cats', 'cat')).toBe(false)
    expect(isAnagramCharCounts('cat', 'cats')).toBe(false)
  })
})