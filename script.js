var  nome = prompt(`Olá, seja muito bem vindo. Por favor nos diga o seu nome:`);
var  idade = parseFloat(prompt(`Obrigado, ${nome}, agora informe a sua idade`));
var ano = 2024;
var nascimento = ano-idade;
if (nascimento >=0) {
 alert(`Você nasceu no ano de ${nascimento}`);
} else {
    alert(`Você nasceu no ano de ${nascimento} antes de cristo`);
}
