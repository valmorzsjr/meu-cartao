let logicaOk = false;
let mathOk = false;

function iniciarDigitacao() {
    const span = document.querySelector('.texto-animado span');
    if (!span) return;
    
    const texto = span.innerText;
    const larguraTotal = span.scrollWidth; 
    
    span.style.width = '0';
    span.classList.add('cursor-piscando');
    
    let tempoInicio = null;
    const duracao = 3000;

    function animar(tempoAtual) {
        if (!tempoInicio) tempoInicio = tempoAtual;
        const progresso = tempoAtual - tempoInicio;
        const percentual = Math.min(progresso / duracao, 1);
        
        span.style.width = (percentual * larguraTotal) + 'px';

        if (percentual < 1) {
            requestAnimationFrame(animar);
        }
    }

    requestAnimationFrame(animar);
}

function verificarConquista() {
    const btnSaudar = document.getElementById('btnSaudar');
    if (logicaOk && mathOk) {
        btnSaudar.innerText = "Access Granted!";
        btnSaudar.style.backgroundColor = "#28a745";
        btnSaudar.style.transform = "scale(1.1)";
    }
}

function dispararErro() {
    const elementoCartao = document.querySelector('.cartao');
    if (elementoCartao) {
        elementoCartao.classList.remove('erro-shake');
        void elementoCartao.offsetWidth;
        elementoCartao.classList.add('erro-shake');
    }
}

document.getElementById('btnSaudar').onclick = () => {
    if (logicaOk && mathOk) {
        alert('Well done! You beat the challenges. +55 51 98566-5255');
    } else {
        alert('Access Denied! Solve the 1st and 2nd Challenges to unlock my email.');
    }
};

document.getElementById('btnLogica').onclick = function() {
    let resp = prompt("The code works, but it has no letters, numbers, or symbols. It's made of what everyone sees, but no one reads. What is it?");
  
    if (resp && (resp.toLowerCase().includes("space") || resp.toLowerCase().includes("indentation") || resp.toLowerCase().includes("espaço") || resp.toLowerCase().includes("identação"))) {
        alert("ACCESS GRANTED! Part 1 of the secret: '+5551985'");
        logicaOk = true;
        verificarConquista();
    } else {
        dispararErro()
        alert("Hint: Even with semicolons and braces { }, without THIS, your code would be a mess. It's the 'void' between words.");
    }
};

document.getElementById('btnMatematica').onclick = function() {
    let resp = prompt("If 2+3=10, 7+2=63 and 6+5=66... How much is 9+7?");
    
    if (resp == "144") {
        alert("Math Master! Part 2 of the secret: '665255'");
        mathOk = true;
        verificarConquista();
    } else {
        dispararErro();
        alert("Hint: The sum is just the beginning, but the first number is the key.");
    }
};

window.addEventListener('load', iniciarDigitacao);
