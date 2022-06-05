function runString(method, cases) {
  cases.trim().split('\n').forEach(line => {
    const args = line.split(' ')
    const output = args.pop()

    it(line, () => expect(method(...args)).toStrictEqual(output))
  })
}

function runArray(method, cases) {
  cases.forEach(line => {
    const args = line
    const output = args.pop()
    it(line.join(' '), () => expect(method(...args)).toStrictEqual(output))
  })
}

function runCases(method, cases) {
  describe(method.name, () => {
    if (typeof cases === 'string') {
      runString(method, cases)
    }
    else {
      runArray(method, cases)
    }
  })
}

/*
// In Browser //
function average(numberArray) {
  const sum = numberArray.reduce((a, b) => a + b, 0)
  const quotient = sum / numberArray.length
  return quotient
}

const cases = [
  {
    method: average,
    input: [[1,3,5]],
    output: 3,
  },
  
  {
    method: average,
    input: [[4,5]],
    output: 4.5,
  },
]

console.info('running tests')
for (const {method, input, output} of cases) {
  const actual = method(...input)
    console.assert(
      actual === output,
      `${method.name}([${input}]) -> Expected: ${output}, Actual: ${actual}`
    )
  }
}
*/

module.exports = runCases