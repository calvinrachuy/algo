function zeroMatrix(M) {
  if (!M) return null
  if (!M.length) return null
  if (!M[0]) return M
  
  const rows = M.length
  const cols = M[0].length
  
  return M
}

/*
If a value is zero, zero that row and column
*/

describe.skip('zeroMatrix', () => {
  it('no zeros', () => {
    const input = [
      [3,6,4],
      [3,7,9],
      [8,2,2],
    ]
    const output = [
      [3,6,4],
      [3,7,9],
      [8,2,2],
    ]
    
    expect(zeroMatrix(input)).toStrictEqual(output)
  })
  
  it('center zero', () => {
    const input = [
      [3,6,4],
      [3,0,9],
      [8,2,2],
    ]
    const output = [
      [3,0,4],
      [0,0,0],
      [8,0,2],
    ]
    
    expect(zeroMatrix(input)).toStrictEqual(output)
  })
  
  it('corner zero', () => {
    const input = [
      [3,6,0],
      [3,7,9],
      [8,2,2],
    ]
    const output = [
      [0,0,0],
      [3,7,0],
      [8,2,0],
    ]
    
    expect(zeroMatrix(input)).toStrictEqual(output)
  })
  
  it('no zeros', () => {
    const input = [
      [3,6,4],
      [3,7,9],
      [8,2,2],
    ]
    const output = [
      [3,6,4],
      [3,7,9],
      [8,2,2],
    ]
    
    expect(zeroMatrix(input)).toStrictEqual(output)
  })
})