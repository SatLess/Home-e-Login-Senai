//efeito do botão voltar ao Topo
function irAoTopo(){
    window.scrollTo({
        top: 0,  left: 0,  behavior: 'smooth'
        })
}
//Validação de Login

function login(){
    let is_logged = false;
    let usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    let senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
    window.location = "index.html";
    is_logged = true;
    }
    if(is_logged == false){
    alert("Dados Incorretos. Tente novamente ou se Cadastre");
    } }

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
    }