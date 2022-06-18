const {encode, decode} = require('./encode')

describe('encode function', () => {
  it('[a, e, i, o, u] becomes [1, 2, 3, 4, 5]', () => {
    expect(encode('aeiou')).toBe('12345')
  })

  it('bcdfgh becomes bcdfgh', () => {
    expect(encode('bcdfgh')).toBe('bcdfgh')
  })

  it('teste length to be 5', () => {
    expect(encode('teste').length).toBe(5)
  })
})


describe('decode function', () => {
  it('[1, 2, 3, 4, 5] becomes [a, e, i, o, u]', () => {
    expect(decode('12345')).toBe('aeiou')
  })

  it('67890 becomes 67890', () => {
    expect(decode('67890')).toBe('67890')
  })

  it('t3st3 length to be 5', () => {
    expect(encode('t3st3').length).toBe(5)
  })
})
