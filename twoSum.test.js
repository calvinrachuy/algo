function twoSum(list, sum) {
  const map = new Map()
  list.forEach((n, i) => {
    if (!map.has(n)) map.set(n, i)
  })
  for (let k of map.keys()) {
    const a = k
    const b = sum - k
    if (map.has(b)) {
      return [map.get(a), map.get(b)]
    }
  }
  
  return -1
}

describe('twoSum', () => {
  it('small', () => {
    expect(twoSum([2,4,5,7], 7)).toStrictEqual([0, 2])
  })
  
  it('even length', () => {
    expect(twoSum([-1,3,3,5,7,10], 8)).toStrictEqual([1, 3])
  })
  
  it('odd length', () => {
    expect(twoSum([-1,3,3,5,7], 8)).toStrictEqual([1, 3])
  })
})