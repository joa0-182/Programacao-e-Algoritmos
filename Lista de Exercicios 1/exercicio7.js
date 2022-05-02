/*
    7) Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.
*/

var nomeVendedor = prompt("Digite o seu nome");
var salarioFixo = parseFloat(prompt("Digite o salário fixo"));
var totalVendas = parseFloat(prompt("Digite o valor total de vendas no mês"));

var percentualComissao = 0.15;
var valorComissao = totalVendas * percentualComissao;
var salarioFinal = salarioFixo + valorComissao;

console.log("Nome: " + nome);
console.log("Salário fixo: " + salarioFixo);
console.log("Salário final: " + salarioFinal);
