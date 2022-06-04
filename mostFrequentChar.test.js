/*
most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

function mostFrequentChar(string) {
  let maxCount = 0
  let maxChar = ''
  counts = {}
  for (const char of string) {
    if (!(char in counts)) counts[char] = 0
    counts[char]++
  }
  for (const [k, v] of Object.entries(counts)) {
    if (v > maxCount) {
      maxCount = v
      maxChar = k
    }
  }
  return maxChar
}