function isOneEditAway(A, B) {
  if (Math.abs(A.length - B.length) > 1) return false
  
  let edits = 0
  let a = 0
  let b = 0
  
  while (a <= A.length && b <= B.length) {
    if (edits > 1) return false
    
    if (A[a] == B[b]) {
      a++
      b++
    }
    else if (A[a + 1] == B[b]) {
      edits++
      a++
    }
    else if (A[a] == B[b + 1]) {
      edits++
      b++
    }
    else {
      edits++
      a++
      b++
    }
  }
  return edits == 1
}

module.exports = isOneEditAway