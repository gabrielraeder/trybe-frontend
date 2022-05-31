// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const hreflink = document.querySelector("#href");

function prevent(event) {
  event.preventDefault()
}

hreflink.addEventListener('click', prevent)
INPUT_CHECKBOX.addEventListener('click', prevent)

function preventText(event) {
  if (event.key != 'a') {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', preventText)