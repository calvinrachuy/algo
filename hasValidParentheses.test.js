function hasValidParentheses(str) {
  let open = 0
  
  for (const char of str) {
    if (char == '(') open++
    if (char == ')') open--
    if (open < 0) return false
  }
  
  return open == 0
}

/*
Time: O(n)
Space: O(1)
*/

describe('hasValidParentheses', () => {
  it('valid', () => {
    const input = "(david)((abby))"
    expect(hasValidParentheses(input)).toBe(true)
  })
  
  it('extra open', () => {
    const input = "((david)((abby))"
    expect(hasValidParentheses(input)).toBe(false)
  })
  
  it('extra close', () => {
    const input = "(david)((abby)))"
    expect(hasValidParentheses(input)).toBe(false)
  })
  
  it('premature close', () => {
    const input = "(david))((abby))"
    expect(hasValidParentheses(input)).toBe(false)
  })
  
  it('inverted', () => {
    const input = ")("
    expect(hasValidParentheses(input)).toBe(false)
  })
  
  it('empty string', () => {
    const input = ""
    expect(hasValidParentheses(input)).toBe(true)
  })
})