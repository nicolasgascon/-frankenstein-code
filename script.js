document.getElementById('btn-invoca').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById('display-frase').innerText = frases[randomIndex];
});