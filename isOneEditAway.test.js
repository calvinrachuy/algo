function isOneEditAway(A, B) {
  if (Math.abs(A.length - B.length) > 1) return false
  
  let diffs = 0
  let a = 0
  let b = 0
  
  while (a <= A.length && b <= B.length) {
    if (A[a] == B[b]) {
      a++
      b++
    }
    else if (A[a + 1] == B[b]) {
      diffs++
      a++
    }
    else if (A[a] == B[b + 1]) {
      diffs++
      b++
    }
    else {
      diffs++
      a++
      b++
    }
  }
  return diffs == 1
}

describe('isOneEditAway', () => {
  it('too long', () => {
    expect(isOneEditAway('application', 'app')).toBe(false)
  })
  
  it('too short', () => {
    expect(isOneEditAway('app', 'application')).toBe(false)
  })
  
  
  it('too different', () => {
    expect(isOneEditAway('apple', 'orange')).toBe(false)
  })
  
  it('two diffs', () => {
    expect(isOneEditAway('pale', 'bake')).toBe(false)
  })
  
  it('replace', () => {
    expect(isOneEditAway('bale', 'bake')).toBe(true)
    expect(isOneEditAway('boat', 'coat')).toBe(true)
  })
  
  it('insert', () => {
    expect(isOneEditAway('bat', 'boat')).toBe(true)
    expect(isOneEditAway('boa', 'boat')).toBe(true)
    expect(isOneEditAway('oat', 'boat')).toBe(true)
  })
  
  it('remove', () => {
    expect(isOneEditAway('boat', 'bat')).toBe(true)
    expect(isOneEditAway('boat', 'boa')).toBe(true)
    expect(isOneEditAway('boat', 'oat')).toBe(true)
  })
  
  it('same string', () => {
    expect(isOneEditAway('apple', 'apple')).toBe(false)
  })
})