const searchEmployee = require('./bonus')

describe('searchEmployee function', () => {
  it('is a function', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  it('id is invalid', () => {
    expect(() => searchEmployee()).toThrowError('ID não identificada')
  })

  it('information doenst exist, return error', () => {
    expect(() => searchEmployee('4678-2', 'nome')).toThrowError('Informação indisponível')
  })

  it('ID 4678-2 lastname returns Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('4678-2, Dodds')
  })
})