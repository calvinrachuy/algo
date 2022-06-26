/*
https://structy.net/problems/premium/nesting-score

nesting score
Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.

test_00:
nestingScore("[]"); // -> 1
test_01:
nestingScore("[][][]"); // -> 3
test_02:
nestingScore("[[]]"); // -> 2
test_03:
nestingScore("[[][]]"); // -> 4
test_04:
nestingScore("[[][][]]"); // -> 6
test_05:
nestingScore("[[][]][]"); // -> 5
test_06:
nestingScore("[][[][]][[]]"); // -> 7
test_07:
nestingScore("[[[[[[[][]]]]]]][]"); // -> 129
*/

/*

*/

function getNestedScore(str) {
  const stack = [0]
  
  for (const char of str) {
    if (char == '[') {
      stack.push(0)
    }
    else {
      const score = stack.pop()
      if (score == 0) {
        stack[stack.length - 1] += 1
      }
      else {
        stack[stack.length - 1] += 2 * score
      }
    }
  }
  
  return stack[0]
}


describe('getNestedScore', () => {
  it('test_00', () => {
    const actual = getNestedScore("[]")
    expect(actual).toBe(1)
  })

  it('test_01', () => {
    const actual = getNestedScore("[][][]")
    expect(actual).toBe(3)
  })

  it('test_02', () => {
    const actual = getNestedScore("[[]]")
    expect(actual).toBe(2)
  })

  it('test_03', () => {
    const actual = getNestedScore("[[][]]")
    expect(actual).toBe(4)
  })

  it('test_04', () => {
    const actual = getNestedScore("[[][][]]")
    expect(actual).toBe(6)
  })

  it('test_05', () => {
    const actual = getNestedScore("[[][]][]")
    expect(actual).toBe(5)
  })

  it('test_06', () => {
    const actual = getNestedScore("[][[][]][[]]")
    expect(actual).toBe(7)
  })

  it('test_07', () => {
    const actual = getNestedScore("[[[[[[[][]]]]]]][]")
    expect(actual).toBe(129)
  })
})