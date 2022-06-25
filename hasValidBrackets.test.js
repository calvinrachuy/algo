/*
https://structy.net/problems/premium/befitting-brackets
befitting brackets
Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }

test_00:
befittingBrackets('(){}[](())'); // -> true
test_01:
befittingBrackets('({[]})'); // -> true
test_02:
befittingBrackets('[][}'); // -> false
test_03:
befittingBrackets('{[]}({}'); // -> false
test_04:
befittingBrackets('[]{}(}[]'); // -> false
test_05:
befittingBrackets('[]{}()[]'); // -> true
test_06:
befittingBrackets(']{}'); // -> false
test_07:
befittingBrackets(''); // -> true
test_08:
befittingBrackets('{[(}])'); // -> false
*/

/*
NOTE: test_08 is important. A valid count of pairs closed in the wrong order is invalid.
*/

function hasValidBrackets(str) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  
  let open = []
  
  for (const char of str) {
    const last = open[open.length - 1]
    
    if ('([{'.includes(char)) open.push(char)
    
    if (')]}'.includes(char)) {
      if (map[char] == last) {
        open.pop()
      }
      else {
        return false
      }
    }
  }
  
  return open.length == 0
}

describe('hasValidBrackets', () => {
  it('test_00', () => {
    const actual = hasValidBrackets('(){}[](())'); // -> true
    expect(actual).toBe(true)
  })
  
  it('test_01', () => {
    const actual = hasValidBrackets('({[]})'); // -> true
    expect(actual).toBe(true)
  })
  
  it('test_02', () => {
    const actual = hasValidBrackets('[][}'); // -> false
    expect(actual).toBe(false)
  })
  
  it('test_03', () => {
    const actual = hasValidBrackets('{[]}({}'); // -> false
    expect(actual).toBe(false)
  })
  
  it('test_04', () => {
    const actual = hasValidBrackets('[]{}(}[]'); // -> false
    expect(actual).toBe(false)
  })
  
  it('test_05', () => {
    const actual = hasValidBrackets('[]{}()[]'); // -> true
    expect(actual).toBe(true)
  })
  
  it('test_06', () => {
    const actual = hasValidBrackets(']{}'); // -> false
    expect(actual).toBe(false)
  })
  
  it('test_07', () => {
    const actual = hasValidBrackets(''); // -> true
    expect(actual).toBe(true)
  })
  
  it('test_08', () => {
    const actual = hasValidBrackets('{[(}])'); // -> false
    expect(actual).toBe(false)
  })
})