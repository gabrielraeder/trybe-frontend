const sum = require('./sum.js');

describe('sum function', () => {
  it('recebe sum(4,5) e retorna 9', () => { //ex1.1
    expect(sum(4,5)).toBe(9);
  })

  it('recebe sum(0,0) e retorna 0', () => { //ex1.2
    expect(sum(0,0)).toBe(0);
  })

  it('recebe sum(4,"5") e retorna Error', () => { //ex1.3
    expect(() => sum(4, '5')).toThrow(Error);
    expect(() => sum(4, '5')).toThrow('parameters must be numbers') //ex1.4
  })
});