/*
https://leetcode.com/explore/interview/card/google/67/sql-2/472/

1. iterate from the right
    ignore provided dashes
    take k characters at a time
    insert a dash
    stop when remaining count is <= k
    
    return reversed string
    
    T: O(s)
    S: O(s)
    
2. remove all dashes
    divide s length by k
    build up result string
      add remainder or k first characters
      
      loop
        add dash
        add k next characters
    
    return string
    
    T: O(s)
    S: O(s)
*/

function formatLicenseKey(s, k) {
  const str = s.replaceAll('-', '').toUpperCase()
  const firstLength = str.length - parseInt(str.length / k) * k || k
  let result = str.slice(0, firstLength)
  for (let i = firstLength; i < str.length; i += k) {
    result += '-'
    result += str.slice(i, i + k)
  }
  return result
}

describe('formatLicenseKey', () => {
  it("5F3Z-2e-9-w", () => {
    const actual = formatLicenseKey("5F3Z-2e-9-w", 4)
    expect(actual).toBe("5F3Z-2E9W")
  })
  
  it("2-5g-3-J", () => {
    const actual = formatLicenseKey("2-5g-3-J", 2)
    expect(actual).toBe("2-5G-3J")
  })
})