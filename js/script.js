
function validarCPF() {
  const cpf = document.getElementById("cpf").value;
  let numerosCPF = cpf.replace(/[^\d]/g, ""); // remove pontos e traços do CPF
  if (numerosCPF.length !== 11) {
    document.getElementById("resultado").innerHTML = "CPF inválido";
    return false;
  }

  // calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(numerosCPF.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito > 9) {
    primeiroDigito = 0;
  }

  // calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(numerosCPF.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito > 9) {
    segundoDigito = 0;
  }

  // verifica se os dígitos calculados são iguais aos dígitos informados
  if (primeiroDigito === parseInt(numerosCPF.charAt(9)) &&
      segundoDigito === parseInt(numerosCPF.charAt(10))) {
    document.getElementById("resultado").innerHTML = "CPF válido";
    return true;
  } else {
    document.getElementById("resultado").innerHTML = "CPF inválido";
    return false;
  }
}

const form = document.getElementById('form-validador');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const cpf = document.getElementById('cpf').value;
  const resultado = document.getElementById('resultado');

  if (validarCPF(cpf)) {
    resultado.innerHTML = "CPF válido";
  } else {
    resultado.innerHTML = "CPF inválido";
  }
});