function twoSum(list, target) {
  let left = 0
  let right = list.length - 1
  while (left < right) {
    const sum = list[left] + list[right]
    if (sum === target) {
      return [left, right]
    }
    else if (sum < target) {
      left++
    }
    else {
      right--
    }
  }
  return -1
}

describe('twoSumSorted', () => {
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