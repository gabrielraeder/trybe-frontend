const myRemove = require('./myRemove')

describe('myRemove function', () => {
  it('recebe [1, 2, 3, 4] e remove o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toContain(1, 2, 4)
  })

  it('recebe [1, 2, 3, 4] não retorna [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.not.arrayContaining([1, 2, 3, 4]))
  })

  it('recebe [1, 2, 3, 4] e remove o 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expect.arrayContaining([1, 2, 3, 4]))
  })
})