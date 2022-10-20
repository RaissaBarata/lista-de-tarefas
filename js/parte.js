let contador = 0;
let input = document.getElementById('inputTarefa');
let button = document.getElementById('botaoAdd');
let main = document.getElementById('areaItens');

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      adicionarTarefa();
    }
  });


function adicionarTarefa() {
    // para pegar o valor digitado no input
    let valorInput = input.value;

    ++contador; 

    let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icone"><i id="icone_${contador}" class="mdi mdi-circle-outline"></i></div>
    <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
    <div class="item-botao">
      <button onclick="deletar(${contador})" class="delete">
        <i class="mdi mdi-delete-outline"></i>
      </button>
    </div>
  </div>`

// o main recebe o conteúdo que ele já tem + o conteúdo que será adicionado por isso (main +-novoitem)
  main.innerHTML += novoItem;

  // para zerar os campos
  input.value = ""; 

}
// função de deletar
   function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
  }

  //função de marcar tarefa
  function marcarTarefa(id){
    var item = document.getElementById(id);
    item.classList.add('clicado');

      
    var icone = document.getElementById('icone_'+ id);
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');
  }
  