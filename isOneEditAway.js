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

module.exports = isOneEditAway