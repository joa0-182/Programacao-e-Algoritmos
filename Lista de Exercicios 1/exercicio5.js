/* 
    5) Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.
*/

var nome = prompt("Digite seu nome");
var nota1 = parseFloat(prompt("Digite a nota 1"));
var nota2 = parseFloat(prompt("Digite a nota 2"));
var nota3 = parseFloat(prompt("Digite a nota 3"));


var media = (nota1 + nota2 + nota3)/3;

alert("Olá " + nome + ", sua média foi de: " + media);