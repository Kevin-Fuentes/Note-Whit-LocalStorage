// variables

const Listanotas = document.getElementById("lista-notas");



addEventListener();
// funcion para enviar la nota al formulario
function addEventListener() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarNotas);
}
// funcio para agregar la nota al formulario
function agregarNotas(e) {
  e.preventDefault();
  const nota = document.getElementById("notas").value;


// Generamos un boton para eliminar las notas.

  const bottonBorrar = document.createElement("a");
  bottonBorrar.classList = "borrar-notas";
  bottonBorrar.innerText = "x";
//generamos una lista. 
  const li = document.createElement("li");
  li.innerText = nota;
// añadimos el boton y las listas. 
  Listanotas.appendChild(li);
  li.appendChild(bottonBorrar);
  

bottonBorrar.addEventListener('click',function () {
   li.remove('li');
})


}

