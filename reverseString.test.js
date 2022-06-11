function reverse(string) {
  let left = 0
  let right = string.length - 1
  let chars = string.split('')
  while (left < right) {
    const temp = chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }
  return chars.join('')
}

describe('reverse', () => {
  it ('reverses a string', () => {
    expect(reverse('cat')).toBe('tac')
    expect(reverse('racecar')).toBe('racecar')
    expect(reverse('')).toBe('')
    expect(reverse('a')).toBe('a')
    expect(reverse('Once upon a time.')).toBe('.emit a nopu ecnO')
  })
})