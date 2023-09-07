//  criando classe usuarios //
class User {
  constructor(nome, senha) {
    this.nome = nome
    this.senha = senha
  }


}

const users = []

const btnCad = document.getElementById('cadastarOutro')

const tabela = document.getElementById('tabelaUser')

// função para criar os usuarios e empurrar eles para dentro do array
function criaUser(nome, senha) {

  let newUser = new User(nome, senha)
  users.push(newUser)
  limparCampos()



}
// essa função retorna o que vai ser escrito dentro do html //
function preencheTable(user, index) {
  return ` <table id="tabela">
    <tr>
      <th>Nome</th>
      <th>Senha</th>
      <th>ações</th>
    </tr>
    <tr>
      <td class="td-tabela">
        <span class="nome-usuario" id="nome-${index}">${user.nome}</span>
        <input type="text"  id="input-nome-${index}" maxlength="15" class="edit">
      </td>
      <td class="td-tabela"><span id="senha-${index}">${user.senha}</span>
      <input type="text" id="input-senha-${index}" maxlength="15" class="edit">
      </td>
      <td class="icons-table"> <img src="./src/icons/pencil.svg" alt="lapis" class="icon-edit" onclick="editarUsuario(${index})"> <img src="./src/icons/trash.svg" alt="lixeira" class="icon-edit" onclick="excluirUsuario(${index})"></td>
    </tr>
  </table> `


}

// essa função faz aparecer na tela o que esta dentro do array de usuarios // 
function teste() {
  tabela.innerHTML = ""
  users.forEach((user, index) => {

    tabela.innerHTML += preencheTable(user, index)
  })


}
// essa função edita o usuario de acordo com o index do botão clicado//

function editarUsuario(index) {
  const nomeSpan = document.getElementById(`nome-${index}`);
  const inputNome = document.getElementById(`input-nome-${index}`);
  const senhaSpan = document.getElementById(`senha-${index}`);
  const inputSenha = document.getElementById(`input-senha-${index}`);

  //ativa os campos de entrada editaveis e faz com o que já esteja escrito no span suma//
  nomeSpan.style.display = 'none';
  inputNome.style.display = 'inline-block';
  senhaSpan.style.display = 'none';
  inputSenha.style.display = 'inline-block';

  inputNome.value = users[index].nome;
  inputSenha.value = users[index].senha;
  
  

  inputNome.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const novoNome = inputNome.value;
      const novoSenha = inputSenha.value;

      const nomeExistente = users.find(user => user.nome.toLowerCase() === novoNome.toLowerCase());
    
      if (nomeExistente && nomeExistente.nome !== users[index].nome) {
        alert("Este nome já está em uso por outro usuário.");
        return;
      }

      if (novoSenha.length < 8) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        return;
      }

      if (novoNome.length < 4) {
        alert("O nome deve conter pelo menos 4 caracteres.");
        return;
      }


      users[index].nome = novoNome;
      users[index].senha = novoSenha;

      // Atualizar a exibição da tabela
      teste();
    }
  });

  inputSenha.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const novoNome = inputNome.value;
      const novoSenha = inputSenha.value;

      if (novoNome != users[index].nome && verificaNome(novoNome)) {
        alert("Este nome já está em uso por outro usuário.");
        return;
      }

      if (novoSenha.length < 8) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        return;
      }

      if (novoNome.length < 4) {
        alert("O nome deve conter pelo menos 4 caracteres.");
        return;
      }

      users[index].nome = novoNome;
      users[index].senha = novoSenha;

      // Atualizar a exibição da tabela
      teste();
    }
  })



}

// botão que leva para tela de cadastro //
btnCad.addEventListener('click', () => {
  location.href = "#tela-cadastro"
  // tabela.innerHTML = ""

})

function limparCampos() {
  document.getElementById('name-cadastro').value = ""
  document.getElementById('senha-cadastro').value = ""
}

function excluirUsuario(index) {
  if (confirm("Tem certeza que deseja excluir este usuario?")) {
    users.splice(index, 1);
    teste();
  }
}

function verificaNome(nome) {
  return users.some(function (usuario) {
    return usuario.nome === nome;
  });
}




// botao que cadastra usuario novo e ativa as outras funções para apresentar tudo na tela //
const btn = document.getElementById('btn-cadastro')

btn.addEventListener('click', () => {
  let nome = document.getElementById('name-cadastro').value
  let senha = document.getElementById('senha-cadastro').value
  nome = nome.toLowerCase()
  senha = senha.toLowerCase()

  if (!verificaNome(nome)) {
    if (senha.length >= 8 && nome.length >= 4) {
      location.href = "#edit-tela";
      criaUser(nome, senha);
      teste();
      console.log(nome, senha);
      console.log(users);
      limparCampos();
    } else {
      console.log(nome, senha);
      console.log(users);
    }
  } else {
    alert("Nome já utilizado.");
    console.log(nome, senha);
    console.log(users);
  }
})




