// Um CPF válido deve seguir as seguintes regras:

// Ter 11 dígitos
// Não pode ser uma sequência de números iguais (ex: 111.111.111-11)
// Deve seguir um algoritmo para o cálculo dos dígitos verificadores.      

function validaCPF(cpf) {
  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se o CPF é uma sequência de números iguais
  const sequencia = cpf[0].repeat(11);
  if (sequencia === cpf) {
    return false;
  }

  // Calcula os dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  // CPF válido
  return true;
  
}

const btnValidaCPF = document.getElementById("validate");
btnValidaCPF.addEventListener("click", function (event) {
  event.preventDefault();
  const cpfInput = document.getElementById("cpf-input");
  const cpf = cpfInput.value;

  const resultado = validaCPF(cpf);
  const cpfValidation = document.getElementById("cpf-validation");

  if (resultado) {
    cpfValidation.innerText = "CPF válido!";
  } else {
    cpfValidation.innerText = "CPF inválido!";
  }

  cpfInput.value = ""; // limpa o valor do campo de entrada do CPF
});


// Adiciona hifens e pontos ao CPF

// const cpfInput = document.getElementById("cpf-input");
// cpfInput.addEventListener("input", function () {
//   let cpf = cpfInput.value;
//   cpf = cpf.replace(/\D/g, ""); // remove todos os caracteres não numéricos
//   cpf = cpf.slice(0, 11); // limita o CPF a 11 caracteres

//   if (cpf.length > 3) {
//     cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
//   }
//   if (cpf.length > 7) {
//     cpf = cpf.slice(0, 7) + "." + cpf.slice(7);
//   }
//   if (cpf.length > 11) {
//     cpf = cpf.slice(0, 11) + "-" + cpf.slice(11);
//   }

//   cpfInput.value = cpf;
  
// });