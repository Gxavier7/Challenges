const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const bornDate = document.querySelector('#bornDate');
const radioInput = document.querySelectorAll('.radio');
let selected = "";

function trueRadio() {
  radioInput.forEach( (element) => {
    element.checked ? selected = element : null
  });
  return selected
}

function validation() {
  trueRadio();  
  alert(`
    Validação concluída
    Nome: ${name.value}
    Email: ${mail.value}
    Data de nascimento: ${bornDate.value}
    Gênero: ${selected.id}
  `)
}