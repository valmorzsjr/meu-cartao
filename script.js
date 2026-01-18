function dispararErro() {
    const elementoCartao = document.querySelector('.cartao');
    if (elementoCartao) {
        elementoCartao.classList.remove('erro-shake');
        void elementoCartao.offsetWidth; 
        elementoCartao.classList.add('erro-shake');
    }
}

document.getElementById('btnSaudar').onclick = () => alert('Olá! Vamos programar!');

document.getElementById('btnLogica').onclick = function() {
    let resp = prompt("O código funciona, mas não tem letras, números ou símbolos. É feito do que todos veem, mas ninguém lê. Se deletar o 'vazio', o código quebra. O que é?");
  
    if (resp && (resp.toLowerCase().includes("espaço") || resp.toLowerCase().includes("identação") || resp.toLowerCase().includes("espaco"))) {
        alert("IMPEDÍVEL! Você enxergou o invisível na programação.");
    } else {
        dispararErro(); 
        setTimeout(() => {
            alert("Dica: Sem isso, o Python nem funcionaria... O que preenche o vazio entre as palavras?");
        }, 100); 
    }
};

document.getElementById('btnMatematica').onclick = function() {
    let resp = prompt("Se 2+3=10, 7+2=63 e 6+5=66... Quanto é 9+7?");
    if (resp == "144") {
        alert("Mestre da Matemática! Padrão identificado com sucesso.");
    } else {
        dispararErro();
        setTimeout(() => {
            alert("Dica: A soma é o começo, mas o primeiro número é a chave.");
        }, 100);
    }
};
