const isAtMostOneEditAway = require('./isAtMostOneEditAway.js')

describe('isAtMostOneEditAway', () => {
  it('too long', () => {
    expect(isAtMostOneEditAway('application', 'app')).toBe(false)
  })
  
  it('too short', () => {
    expect(isAtMostOneEditAway('app', 'application')).toBe(false)
  })
  
  
  it('too different', () => {
    expect(isAtMostOneEditAway('apple', 'orange')).toBe(false)
  })
  
  it('two diffs', () => {
    expect(isAtMostOneEditAway('pale', 'bake')).toBe(false)
  })
  
  it('replace', () => {
    expect(isAtMostOneEditAway('bale', 'bake')).toBe(true)
    expect(isAtMostOneEditAway('boat', 'coat')).toBe(true)
  })
  
  it('insert', () => {
    expect(isAtMostOneEditAway('bat', 'boat')).toBe(true)
    expect(isAtMostOneEditAway('boa', 'boat')).toBe(true)
    expect(isAtMostOneEditAway('oat', 'boat')).toBe(true)
  })
  
  it('remove', () => {
    expect(isAtMostOneEditAway('boat', 'bat')).toBe(true)
    expect(isAtMostOneEditAway('boat', 'boa')).toBe(true)
    expect(isAtMostOneEditAway('boat', 'oat')).toBe(true)
  })
  
  it('same string', () => {
    expect(isAtMostOneEditAway('apple', 'apple')).toBe(true)
  })
  
  it('empty string', () => {
    expect(isAtMostOneEditAway('', '')).toBe(true)
  })
  
  it('single character', () => {
    expect(isAtMostOneEditAway('a', '')).toBe(true)
    expect(isAtMostOneEditAway('', 'b')).toBe(true)
    expect(isAtMostOneEditAway('a', 'b')).toBe(true)
  })
})