// previnindo comportamento padrão botão enviar

function prevent(event) {
  event.preventDefault()
}



function clearInput() {
  document.getElementById('name').removeAttribute('minlength')
  document.getElementById('email').removeAttribute('minlength')
  document.getElementById('email').type = 'text'
  const inputs = document.getElementsByTagName('input');
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index] = '';
    inputs[index].removeAttribute('required')
  }
}

document.getElementById('clear').addEventListener('click', clearInput);

// envio somente com autorização do uso de imagem

function checkAuth(event) {
  const check = document.getElementById('check2');
  if (check.checked === false) {
    event.preventDefault()
    return alert('Necessário permitir divulgação de imagens para participar!')
  }
  const checking = document.getElementsByClassName('lengthLimit');
  for (let index = 0; index < checking.length; index += 1) {
    if (checking[index].value.length > checking[index].maxLength || checking[index].value.length < checking[index].minLength) {
      event.preventDefault()
      return alert('Dados Inválidos')
    }
  }
  return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
}

document.getElementById('submit').addEventListener('click', checkAuth)

// checar campos para limite de caracteres
