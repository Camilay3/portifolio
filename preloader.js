//declaração de variáveis
let idade = document.getElementById('idade');

//preloader
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

//funções
function calcularIdade(ano, mes, dia) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        
        ano = +ano,
        mes = +mes,
        dia = +dia,

        quantos_anos = ano_atual - ano;

    if (mes_atual < mes || mes_atual == mes && dia_atual < dia) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

let idadeCalculada = calcularIdade(2006, 5, 2);

idade.innerText = `Olá meu nome é Camila, tenho ${idadeCalculada} anos e sou estudante de programação desde 2020, e atualmente estou focada em desenvolvimento web e design gráfico.`;
