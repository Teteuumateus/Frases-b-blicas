const versiculosBiblicos = [
    "Porque tudo o que foi escrito no passado foi escrito para nos ensinar, de forma que, por meio da perseverança e do bom ânimo procedentes das Escrituras, mantenhamos a nossa esperança. (Romanos 15:4)",
    "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio. Contra essas coisas não há lei. (Gálatas 5:22-23)",
    "O Senhor é o meu pastor; de nada terei falta. (Salmos 23:1)",
    "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. (Efésios 2:8)",
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre. (Salmos 107:1)",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. (Provérbios 3:5-6)",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel. (Isaías 41:10)"
];

const trocarFrase = document.getElementById('trocar-frase');
const fraseContainer = document.getElementById('frase-container');
document.addEventListener("DOMContentLoaded", gerarFrase)

trocarFrase.addEventListener('click', gerarFrase);

function gerarFrase() {
        const randomIndex = Math.floor(Math.random() * versiculosBiblicos.length);
        const randomFrase = versiculosBiblicos[randomIndex];
        fraseContainer.textContent = randomFrase;
}
