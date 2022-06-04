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

module.exports = runCases