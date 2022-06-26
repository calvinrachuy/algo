/*
https://leetcode.com/explore/interview/card/google/67/sql-2/3044/

Example 1:

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
Example 2:

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3

*/

function countUniqueEmails(emails) {
  const set = new Set()
  for (const email of emails) {
    const matches = email.match(/([^+]*).*(@.*)/)
    const local = matches[1]
    const domain = matches[2]
    const formattedEmail = local.replaceAll('.', '') + '@' + domain
    set.add(formattedEmail)
  }
  return set.size
}

function countUniqueEmailsWithPointer(emails) {
  const set = new Set()
  for (const email of emails) {
    let i = 0
    let local = ''
    while (i < email.length) {
      if (email[i] === '+' || email[i] === '@') break
      if (email[i] !== '.') local += email[i]
      i++
    }
    
    let mid = i
    while (mid < email.length) {
      if (email[mid] === '@') break
      mid++
    }
    
    set.add(local + email.slice(mid))
  }
  return set.size
}

function countUniqueEmailsWithSplit(emails) {
  const set = new Set()
  for (const email of emails) {
    let [local, domain] = email.split('@')
    local = local.split('+')[0]
    local = local.replaceAll('.', '')
    set.add(local + '@' + domain)
  }
  return set.size
}

describe('countUniqueEmails', () => {
  it('example 1', () => {
    const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    const actual = countUniqueEmails(emails)
    expect(actual).toBe(2)
  })
  
  it('example 2', () => {
    const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
    const actual = countUniqueEmails(emails)
    expect(actual).toBe(3)
  })
})

describe('countUniqueEmailsWithPointer', () => {
  it('example 1', () => {
    const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    const actual = countUniqueEmailsWithPointer(emails)
    expect(actual).toBe(2)
  })
  
  it('example 2', () => {
    const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
    const actual = countUniqueEmailsWithPointer(emails)
    expect(actual).toBe(3)
  })
})

describe('countUniqueEmailsWithSplit', () => {
  it('example 1', () => {
    const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    const actual = countUniqueEmailsWithSplit(emails)
    expect(actual).toBe(2)
  })
  
  it('example 2', () => {
    const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
    const actual = countUniqueEmailsWithSplit(emails)
    expect(actual).toBe(3)
  })
})