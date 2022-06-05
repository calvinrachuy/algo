/*
add lists
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addFromReversedLists = (head1, head2) => {
  function listToNum(root) {
    let digits = []
    let current = root
    
    while (current) {
      digits.push(current.val)
      current = current.next
    }
    
    return Number(digits.reverse().join(''))
  }
  
  function numToList(n) {
    const digits = String(n).split('').reverse()
    const dummy = new Node(0)
    
    let previous = dummy
    
    for (const d of digits) {
      const node = new Node(d)
      previous.next = node
      previous = node
    }
    
    return dummy.next
  }
  
  const num1 = listToNum(head1)
  const num2 = listToNum(head2)
  const sum = num1 + num2
  
  return numToList(sum)
};
