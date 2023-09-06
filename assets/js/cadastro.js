
let nomeCadastro = document.getElementById('name-cadastro')
let senhaCadastro = document.getElementById('senha-cadastro')

let labelNome = document.getElementById('label-nome')
let labelSenha = document.getElementById('label-senha')


nomeCadastro.addEventListener('keyup', () =>{
   if( nomeCadastro.value.length <= 4){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = '<strong>Nome *Insira no minimo 4 caracteres </strong>'
      nomeCadastro.setAttribute('style','border-color: red')
   }else{
      labelNome.setAttribute('style','color: green')
      labelNome.innerHTML = 'Nome'
      nomeCadastro.setAttribute('style','border-color: greeb')
   }



})

senhaCadastro.addEventListener('keyup', () =>{
   if( senhaCadastro.value.length <= 4){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = '<strong>Senha *Insira no minimo 8 caracteres </strong>'
      senhaCadastro.setAttribute('style','border-color: red')
   }else{
      labelSenha.setAttribute('style','color: green')
      labelSenha.innerHTML = 'Senha'
      senhaCadastro.setAttribute('style','border-color: greeb')
   }



})



console.log(localStorage.getItem("name","senha"))