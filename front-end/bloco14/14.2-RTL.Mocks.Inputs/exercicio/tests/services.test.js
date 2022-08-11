const services = require('../functions/services');

describe('1 - Testa a função randomNumber ->', () => {
  it('Testa se retorna um número aleatorio entre 0 e 100', () => {
    const random = jest.spyOn(services, "randomNumber")
    const number = random()
    expect(random).toHaveBeenCalledTimes(1)
    random()
    expect(random).toHaveBeenCalledTimes(2)
    expect(number).toBeLessThan(101)
    expect(number).toBeGreaterThanOrEqual(0)
  })

  it('retorna 10 quando mockado o resultado.', () => {
    services.randomNumber = jest.fn().mockReturnValue(10)
    const number = services.randomNumber()
    expect(services.randomNumber).toHaveBeenCalled()
    expect(number).toBe(10)
  })
})

describe('2 - mocka a implementação da função random uma unica vez', () => {
  it('Muda a função para receber 2 parametros e dividir o primeiro pelo segundo', () => {
    services.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
    const div = services.randomNumber(10, 5)
    const div2 = services.randomNumber(10, 2)

    expect(div).toBe(2)
    expect(div2).not.toBe(5)
    expect(div2).toBe(undefined)

    expect(services.randomNumber).toHaveBeenCalledTimes(2)
  })
})

describe('3 - mocka randomNumber 2 vezes diferentes', () => {
  it('Mocka para receber 3 parametros e retornar a multiplicação destes', () => {
    services.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)
    const multi = services.randomNumber(5, 5, 2)
    expect(services.randomNumber).toHaveBeenCalledTimes(1)
    expect(multi).toBe(50)
  })

  it('Reseta o mock e troca função para retornar o dobro de um parametro', () => {
    services.randomNumber.mockReset()
    services.randomNumber = jest.fn().mockImplementation((a) => a * 2)
    const dbl = services.randomNumber(5)
    expect(services.randomNumber).toHaveBeenCalledTimes(1)
    expect(dbl).toBe(10)
    
  })
})

describe('4 - Crie três funções.', () => {
  let { upperString, firstLetter, concatString } = services;

  upperString = jest.fn().mockImplementation((string) => string.toLowerCase())
  firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1])
  concatString = jest.fn().mockImplementation((a, b, c) => a + b + c)

  it('Testa mock de upperString', () => {
    const lower = upperString('GABRIEL')
    expect(lower).toBe('gabriel')
  })
  it('Testa mock de upperString foi resetado', () => {
    upperString.mockReset()
    expect(upperString('gabriel')).toBe(undefined)
    const upperCaseIt = jest.spyOn(services, "upperString")
    const upper = upperCaseIt('gabriel')
    expect(upper).toBe('GABRIEL')
  })

  it('Testa mock de firstLetter', () => {
    const lastLetter = firstLetter('Gabriel')
    expect(lastLetter).toBe('l')
  })
  it('Testa mock de firstLetter foi resetado', () => {
    firstLetter.mockReset()
    expect(firstLetter('gabriel')).toBe(undefined)
    const first = jest.spyOn(services, "firstLetter")
    const upper = first('gabriel')
    expect(upper).toBe('g')
  })

  it('Testa mock de concatString', () => {
    const concat3 = concatString('Gab', 'ri', 'el')
    expect(concat3).toBe('Gabriel')
  })
  it('Testa mock de concatString foi resetado', () => {
    concatString.mockReset()
    expect(concatString('gab', 'riel')).toBe(undefined)
    const first = jest.spyOn(services, "concatString")
    const concat = first('gab', 'riel')
    expect(concat).toBe('gabriel')
  })
})