/*let numero = parseInt(prompt("Digite um número para exibir a tabuada:"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

console.log("Programa encerrado.");*/



//Exemplo 2: Concatenar texto
let texto = prompt("Digite um texto:");

while (texto !== "ESC") {
  texto += " valor concatenado";
  console.log("Texto atualizado: " + texto);
  
  texto = prompt("Digite outro texto (ou ESC para sair):");
}

console.log("Programa encerrado.");

/* Exemplo 3: Repetir mensagem
let quantidade = parseInt(prompt("Insira um valor"));

for (let i = 0; i < quantidade; i++) {
  console.log("Olá");
}*/
