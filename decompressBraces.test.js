/*
decompress braces
Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.

You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

test_00:
decompressBraces("2{q}3{tu}v"); 
// -> qqtututuv 
test_01:
decompressBraces("ch3{ao}"); 
// -> chaoaoao
test_02:
decompressBraces("2{y3{o}}s"); 
// -> yoooyooos
test_03:
decompressBraces("z3{a2{xy}b}"); 
// -> zaxyxybaxyxybaxyxyb 
test_04:
decompressBraces("2{3{r4{e}r}io}"); 
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio 
test_05:
decompressBraces("go3{spinn2{ing}s}"); 
// -> gospinningingsspinningingsspinningings 
test_06:
decompressBraces("2{l2{if}azu}l"); 
// -> lififazulififazul 
test_07:
decompressBraces("3{al4{ec}2{icia}}"); 
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia 
*/

/*
test_02:
decompressBraces("2{y3{o}}s"); 
// -> yoooyooos

result = ''

counts 1, 2, 3
words '', y, o

counts 1, 2
words '', yooo


walk through string
if num
  counts.push(parseInt(char))
  
if {
  skip

if letter
  words[words.length - 1] += char

if }
  const count = counts.pop() || 1
  const word = words.pop()
  const prevWord = words[words.length - 1]
  for (let i = 0; i < count; i++) {
    prevWord += word
  }
*/


function decompressBraces(str) {
  const counts = []
  const words = []
  
  for (const char of str) {
    if (/\d/.test(char)) {
      counts.push(parseInt(char))
      words.push('')
    }
    
    if (/[a-z]/i.test(char)) {
      if (!words.length) words.push('')
      words[words.length - 1] += char
    }
    
    if (char == '}') {
      const count = counts.pop()
      const word = words.pop()
      if (!words.length) words.push('')
      const expanded = Array(count).fill(word).join('')
      words[words.length - 1] += expanded
    }
  }
  
  return words.join('')
}

describe('decompressBraces', () => {
  it('test_00', () => {
    const actual = decompressBraces("2{q}3{tu}v")
    const expected = 'qqtututuv'
   expect(actual).toBe(expected)
  })

  it('test_01', () => {
    const actual = decompressBraces("ch3{ao}")
    const expected = 'chaoaoao'
   expect(actual).toBe(expected)
  })

  it('test_02', () => {
    const actual = decompressBraces("2{y3{o}}s")
    const expected = 'yoooyooos'
   expect(actual).toBe(expected)
  })

  it('test_03', () => {
    const actual = decompressBraces("z3{a2{xy}b}")
    const expected = 'zaxyxybaxyxybaxyxyb'
   expect(actual).toBe(expected)
  })

  it('test_04', () => {
    const actual = decompressBraces("2{3{r4{e}r}io}")
    const expected = 'reeeerreeeerreeeerioreeeerreeeerreeeerio'
   expect(actual).toBe(expected)
  })

  it('test_05', () => {
    const actual = decompressBraces("go3{spinn2{ing}s}")
    const expected = 'gospinningingsspinningingsspinningings'
   expect(actual).toBe(expected)
  })

  it('test_06', () => {
    const actual = decompressBraces("2{l2{if}azu}l")
    const expected = 'lififazulififazul'
   expect(actual).toBe(expected)
  })

  it('test_07', () => {
    const actual = decompressBraces("3{al4{ec}2{icia}}")
    const expected = 'alececececiciaiciaalececececiciaiciaalececececiciaicia'
   expect(actual).toBe(expected)
  })
  
  it('uncompressed', () => {
    const actual = decompressBraces("somestring")
    const expected = 'somestring'
   expect(actual).toBe(expected)
  })
  
  it('empty string', () => {
    const actual = decompressBraces("")
    const expected = ''
   expect(actual).toBe(expected)
  })
  
  it('short string', () => {
    const actual = decompressBraces("a")
    const expected = 'a'
   expect(actual).toBe(expected)
  })
})