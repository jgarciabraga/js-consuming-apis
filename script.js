async function buscaEnedereco(cep) {
  let mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    let enedereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    enedereco = await enedereco.json();
    if (enedereco.erro) {
      throw Error("CEP não existente");
    }
    let inputEnedereco = document.getElementById("endereco");
    let inputBairro = document.getElementById("bairro");
    let inputCidade = document.getElementById("cidade");
    let inputEstado = document.getElementById("estado");
    let inputCep = document.getElementById("cep");

    inputEnedereco.value = enedereco.logradouro;
    inputBairro.value = enedereco.bairro;
    inputCidade.value = enedereco.localidade;
    inputEstado.value = enedereco.uf;
    inputCep.value = enedereco.cep;
    return enedereco;
  } catch (error) {
    mensagemErro.innerHTML = "<p>Cep Inválido</p>";
    console.log(error);
  }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEnedereco(cep.value));
