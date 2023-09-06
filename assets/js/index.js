//  criando classe usuarios //
class User{
    constructor(nome,senha){
        this.nome = nome
        this.senha = senha
    }


}

const users = []
             
const btnCad = document.getElementById('cadastarOutro') 

const tabela = document.getElementById('tabelaUser')

// função para criar os usuarios e empurrar eles para dentro do array
function criaUser(nome,senha) {

        let newUser = new User(nome,senha)
        users.push(newUser)
        limparCampos()
        
    
    
}
// essa função retorna o que vai ser escrito dentro do html //
function preencheTable(user,index){
    return ` <table id="tabela">
    <tr>
      <th>Nome</th>
      <th>Senha</th>
      <th>ações</th>
    </tr>
    <tr>
      <td>${user.nome}</td>
      <td>${user.senha}</td>
      <td class="icons-table"> <img src="/assets/icons/pencil.svg" alt="lapis" class="icon-edit" onclick="editarUsuario(${index})"> <img src="/assets/icons/trash.svg" alt="lixeira" class="icon-edit" onclick="excluirUsuario(${index})"></td>
    </tr>
  </table> `


}

// essa função faz aparecer na tela o que esta dentro do array de usuarios // 
function teste(){
      tabela.innerHTML = ""
      users.forEach((user,index) =>{

        tabela.innerHTML += preencheTable(user,index)
      })


}
// essa função edita o usuario de acordo com o index do botão clicado//

function editarUsuario(index){
      const novoNome = prompt('Digite a alteração no nome (minimo: 4 caracteres|máximo: 15 caracteres)')
      const novoSenha = prompt('Digite a alteração na senha (minimo: 8 caracteres|máximo: 15 caracteres)')

      if(novoNome.length >= 4 && novoNome.length <= 15 && novoSenha.length >= 8 && novoSenha.length <=15 ){
        users[index].nome = novoNome;
        users[index].senha = novoSenha;
        teste()
      }else{
        alert("Preencha todos os campos seguindo as orientações corretamente.");
      }
}

// botão que leva para tela de cadastro //
btnCad.addEventListener('click', ()=>{
    location.href = "#tela-cadastro"
    // tabela.innerHTML = ""

})

    function limparCampos(){
      document.getElementById('name-cadastro').value= ""
      document.getElementById('senha-cadastro').value = ""
    }

    function excluirUsuario(index){
      if (confirm("Tem certeza que deseja excluir este usuario?")) {
        users.splice(index, 1);
        teste();
    }
}
    
// botao que cadastra usuario novo e ativa as outras funções para apresentar tudo na tela //
const btn = document.getElementById('btn-cadastro')

btn.addEventListener('click', ()=>{
  let nome =  document.getElementById('name-cadastro').value
  let senha = document.getElementById('senha-cadastro').value

    if(nome && senha){
      location.href = "#edit-tela";
      criaUser(nome,senha)
      teste()

      console.log(nome,senha)
    console.log(users)
      limparCampos()
    
    }else{

      console.log(nome,senha)
      console.log(users)
    }
   


   
})

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
    
  
//     tabela.innerHTML += preencheTable(user)
    


    
// }