function rotateMatrix(M) {
  const w = M.length
  
  for (let layer = 0; layer < w / 2; layer++) {
    
    for (let i = layer; i < w - 1 - layer; i++ ) {
      
    }
  }
  return M
}

describe.skip('rotateMatrix', () => {
  it('1x1', () => {
    const input = [['a']]
    const expected = [['a']]
    expect(rotateMatrix(input)).toStrictEqual(expected)
  })
  
  it('2x2', () => {
    const input = [
      ['a','b'],
      ['c','d']
    ]
    const expected = [
      ['c','a'],
      ['d','b']
    ]
    expect(rotateMatrix(input)).toStrictEqual(expected)
  })
  
  it('3x3', () => {
    const input = [
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i'],
    ]
    const expected = [
      ['g','d','a'],
      ['h','e','b'],
      ['i','f','c'],
    ]
    expect(rotateMatrix(input)).toStrictEqual(expected)
  })
  
  it('4x4', () => {
    const input = [
      ['a','b','c','d'],
      ['e','f','g','h'],
      ['i','j','k','l'],
      ['m','n','o','p'],
    ]
    const expected = [
      ['m','i','e','a'],
      ['n','j','f','b'],
      ['o','k','g','c'],
      ['p','l','h','d'],
    ]
    expect(rotateMatrix(input)).toStrictEqual(expected)
  })
})