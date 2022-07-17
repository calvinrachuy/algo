function flipBitsBitwise(n) {
  return ~ n >>> 0
}

function flipBitsDifference(n) {
  return 4294967295 - n
}

describe('flipBitsBitwise', () => {
  test('0', () => {
    const n = 0
    const expected = 4294967295
    const actual = flipBitsBitwise(n)
    expect(actual).toBe(expected)
  })
  
  test('1', () => {
    const n = 1
    const expected = 4294967294
    const actual = flipBitsBitwise(n)
    expect(actual).toBe(expected)
  })
})

describe('flipBitsDifference', () => {
  test('0', () => {
    const n = 0
    const expected = 4294967295
    const actual = flipBitsDifference(n)
    expect(actual).toBe(expected)
  })
  
  test('1', () => {
    const n = 1
    const expected = 4294967294
    const actual = flipBitsDifference(n)
    expect(actual).toBe(expected)
  })
})