const dogFunc = async () => {
  url = 'https://dog.ceo/api/breeds/image/random'

  return await fetch(url).then((response) => response
    .json())
    .then((json) => response.ok ? Promise.resolve(json): Promise.reject(json))
}

module.exports = { dogFunc };