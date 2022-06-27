/*
search('matt', ['mat', 'bat', 'matte', 'cat', 'mbtt', 'fat', 'baseball']) => ['mat', 'matte', 'mbtt'] 

matt => mit // invalid 

matt : mat

length check
  +/- 1
  if not Math.abs(searchTerm.length - term) <= 1
      return

  isValidTerm
  
  iterate through searchTerm
  iterate through term
  
  loop
      compare characters
      if equal continue
      if different
          some edit
          if string same except one extra letter
          if different don't naively inc both counters
  
  loop through the entire term list, filter down using isValidTerm
  return filtered list
add

remove

change
*/

const isAtMostOneEditAway = require('./isAtMostOneEditAway.js')

//  QUESTION: Should it be searchAtMostOneAway?
const searchAtLeastOneAway = (searchterm, terms) => {
    return terms.filter(term => isAtMostOneEditAway(searchterm, term))
}

// searchAtLeastOneAway('matt', ['mat', 'bat', 'matte', 'cat', 'mbtt', 'fat', 'baseball'])

describe('searchAtLeastOneAway', () => {
  it ('provided test case - matt', () => {
    const actual = searchAtLeastOneAway('matt', ['mat', 'bat', 'matte', 'cat', 'mbtt', 'fat', 'baseball'])
    const expected = ['mat', 'matte', 'mbtt']
    expect(actual).toStrictEqual(expected)
  })
  
  it ('includes same string', () => {
    const actual = searchAtLeastOneAway('matt', ['matt', 'mat', 'bat', 'matte', 'cat', 'mbtt', 'fat', 'baseball'])
    const expected = ['matt', 'mat', 'matte', 'mbtt']
    expect(actual).toStrictEqual(expected)
  })
  
  it ('empty string', () => {
    const actual = searchAtLeastOneAway('', [''])
    const expected = ['']
    expect(actual).toStrictEqual(expected)
  })
})