/*
    6) O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor).
*/

var valorCustoFabrica = parseFloat(prompt("Digite o custo de fábrica"));

var percentualRevendedor = 0.25;
var percentualImpostos = 0.45;

var valorRevendedor = valorCustoFabrica * percentualRevendedor;
var valorImpostos = valorCustoFabrica * percentualImpostos;
var valorFinal = valorCustoFabrica + valorRevendedor + valorImpostos;

console.log("Valor final: " + valorFinal);