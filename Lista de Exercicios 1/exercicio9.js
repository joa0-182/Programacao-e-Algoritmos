/*
   9) Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius. 
      Para isso pesquise a fórmula na internet.
*/

// Entradas
var temperaturaF = parseFloat( prompt("Digite a temperatura em graus Fahrenheits") );

// Processamento
var temperaturaC = (temperaturaF - 32) * (5/9);

// Saída
alert("Temperatura em graus celsius: " +  temperaturaC);
