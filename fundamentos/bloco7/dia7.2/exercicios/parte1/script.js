function verifyNum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1.length === 0 || value2.length === 0) {
    throw new Error('Digite um valor nos dois campos')
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Digite somente números.')
  }
}

const sum = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyNum(value1, value2)
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;

  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}


window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
