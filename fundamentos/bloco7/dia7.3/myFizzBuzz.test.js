const myFizzBuzz = require('./myFizzBuzz')

describe('myFizzBuzz Function', () => {
  it('receives 15 and returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  it('receives 6 and returns fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz')
  })

  it('receives 10 and returns buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })

  it('receives 8 and returns 8', () => {
    expect(myFizzBuzz(8)).toBe(8)
  })

  it('receives nothing and returns false', () => {
    expect(myFizzBuzz()).toBe(false)
  })
})