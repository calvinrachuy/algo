// https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem

function countingValleys(steps, path) {
  let level = 0
  let valleys = 0
  for (const step of path) {
    if (level === -1 && step === 'U') valleys++
    level += step === 'U' ? 1 : -1
  }
  return valleys
}