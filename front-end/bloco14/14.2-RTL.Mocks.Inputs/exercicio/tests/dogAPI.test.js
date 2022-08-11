let { dogFunc } = require('../functions/dogAPI')

describe('Simula requisição a DogAPI', () => {
  dogFunc = jest.fn()
  afterEach(dogFunc.mockReset)

  it('1 - Requisição caso a promise resolva', async () => {
    dogFunc.mockResolvedValue('request success')

    dogFunc()

    expect(dogFunc).toHaveBeenCalled()
    expect(dogFunc).toHaveBeenCalledTimes(1)
    await expect(dogFunc()).resolves.toBe('request success')
    expect(dogFunc).toHaveBeenCalledTimes(2)
  })

  it('2- Requisição caso a promise seja rejeitada', async () => {
    dogFunc.mockResolvedValue('request failure')

    dogFunc()
    
    expect(dogFunc).toHaveBeenCalled()
    expect(dogFunc).toHaveBeenCalledTimes(1)
    await expect(dogFunc()).resolves.toBe('request failure')
    expect(dogFunc).toHaveBeenCalledTimes(2)
  })
})
