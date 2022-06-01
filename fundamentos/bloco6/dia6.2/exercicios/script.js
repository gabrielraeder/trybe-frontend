// function clearInput() {
//   document.getElementById('name').removeAttribute('minlength')
//   document.getElementById('email').removeAttribute('minlength')
//   document.getElementById('email').type = 'text'
//   const inputs = document.getElementsByTagName('input');
//   for (let index = 0; index < inputs.length; index += 1) {
//     inputs[index] = '';
//     inputs[index].removeAttribute('required')
//   }
// }

// document.getElementById('clear').addEventListener('click', clearInput);

// envio somente com autorização do uso de imagem

// function checkAuth(event) {
//   const check = document.getElementById('check2');
//   if (check.checked === false) {
//     event.preventDefault()
//     return alert('Necessário permitir divulgação de imagens para participar!')
//   }
//   const checking = document.getElementsByClassName('checkLength');
//   for (let index = 0; index < checking.length; index += 1) {
//     if (checking[index].value.length > checking[index].maxLength || checking[index].value.length < checking[index].minLength) {
//       event.preventDefault()
//       return alert('Dados Inválidos')
//     }
//   }
//   return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
// }

// document.getElementById('submit').addEventListener('click', checkAuth)

// checar campos para limite de caracteres

// import JustValidatePluginDate from 'just-validate-plugin-date';
const validate = new window.JustValidate('#form');

validate.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Digite seu nome completo'
  },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: ''
  },
  {
    rule: 'maxLength',
    value: 40,
  },
]);

validate.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Digite um E-mail válido'
  },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: ''
  },
  {
    rule: 'maxLength',
    value: 50,
  },
  {
    rule: 'email',
    errorMessage: 'Digite um E-mail válido'
  }
]);

validate.addField('#date', [
  {
    rule: 'required',
    errorMessage: 'Coloque uma data válida'
  },
]);

validate.addField('#submit', [
  {
    // rule: 'required',
    value: 'true',
    errorMessage: 'Necessário permitir divulgação de imagens para participar!'
  }
]);
