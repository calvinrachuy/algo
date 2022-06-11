function binarySearch(list, target) {
  let left = 0
  let right = list.length - 1
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (list[mid] === target) {
      return mid
    }
    else if (list[mid] < target) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }
  return -1
}

describe('binarySearch', () => {
  it('works', () => {
    expect(binarySearch([1,2,3], 2)).toBe(1)
  })
})