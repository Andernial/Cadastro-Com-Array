class User{
    constructor(nome,senha){
        this.nome = nome
        this.senha = senha
    }


}

const users = []
             



const btnCad = document.getElementById('cadastarOutro') 

const tabela = document.getElementById('tabelaUser')


function criaUser(nome,senha) {

        let newUser = new User(nome,senha)
        users.push(newUser)
        limparCampos()
        
    
    
}

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

function teste(){
      tabela.innerHTML = ""
      users.forEach((user,index) =>{

        tabela.innerHTML += preencheTable(user,index)
      })


}

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