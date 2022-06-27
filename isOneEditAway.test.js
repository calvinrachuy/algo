const isOneEditAway = require('./isOneEditAway.js')

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
  
  it('empty string', () => {
    expect(isOneEditAway('', '')).toBe(false)
  })
  
  it('single character', () => {
    expect(isOneEditAway('a', '')).toBe(true)
    expect(isOneEditAway('', 'b')).toBe(true)
    expect(isOneEditAway('a', 'b')).toBe(true)
  })
})