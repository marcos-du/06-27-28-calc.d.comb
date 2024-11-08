const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcular.addEventListener('click', (e) => {
e.preventDefault();
const n = parseInt(document.getElementById('n').value);
const p = parseInt(document.getElementById('p').value);

if (n >= p && p > 0) {
const combinacao = combinar(n, p);
resultado.innerText = Combinações de ${n} elementos tomados ${p} a ${p}: ${combinacao};
} else {
resultado.innerText = 'Erro: Verifique os valores de n e p';
}
});

function combinar(n, p) {
let resultado = 1;
for (let i = n; i > n - p; i--) {
resultado *= i;
}
for (let i = p; i > 1; i--) {
resultado /= i;
}
return resultado;
}

Esse código cria uma página web com um formulário para inserir os valores de n e p. Ao clicar no botão "Calcular", o JavaScript calcula a combinação usando a fórmula:

C(n, p) = n! / (p! * (n-p)!)
