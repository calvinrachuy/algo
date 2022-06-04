function runCases(method, cases) {
  describe(method.name, () => {
    cases.trim().split('\n').forEach(line => {
      const [input, output] = line.split(' ')
      it(input, () => expect(method(input)).toBe(output))
    })
  })
}

module.exports = runCases