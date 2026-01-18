document.getElementById('btnSaudar').onclick = () => alert('Olá! Vamos programar!');


document.getElementById('btnLogica').onclick = function() {
    let resp = prompt("Um programador tem 3 caixas de códigos. Uma contém apenas 'HTML', outra apenas 'CSS' e a terceira 'HTML e CSS'. Todas as etiquetas estão ERRADAS. Você só pode abrir UMA caixa e olhar UM único arquivo. Como você etiqueta todas corretamente?");
  
    if (resp.toLowerCase().includes("mista")) {
        alert("GENIAL! Você entende de eliminação lógica.");
    } else {
        alert("Pense fora da caixa... se todas estão erradas, a 'Mista' não pode ser mista!");
    }
};


document.getElementById('btnMatematica').onclick = function() {
    let resp = prompt("Se 2+3=10, 7+2=63 e 6+5=66... Quanto é 9+7?");
    if (resp == "144") {
        alert("Mestre da Matemática! Padrão identificado com sucesso.");
    } else {
        alert("Dica: A soma é o começo, mas o primeiro número é a chave.");
    }
};
