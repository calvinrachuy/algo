const test = require('./test.js')

function compress(s) {


  return s
}

const cases = `
aaa 3a
t t
ccaaatsss 2c3at3s
ssssbbz 4s2bz
ppoppppp 2po5p
yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 127y
`

test(compress, cases)