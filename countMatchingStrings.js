function matchingStrings(strings, queries) {
  const map = {}
  for (const s of strings) {
    if (!(s in map)) map[s] = 0
    map[s]++
  }
  return queries.map(q => map[q] || 0)
}