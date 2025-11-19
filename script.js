// Seleciona todo o texto do body do index.html
    const text = document.body.innerText; // ou use document.getElementById('seuElemento').innerText para um elemento específico
    const words = text.trim().split(/\s+/);
    const palavrasMaiusculas = words.filter(word => /^[A-ZÁÉÍÓÚÀÂÊÔÇ]{1}.*$/.test(word) && word.length > 3);
    const todasPalavras = words.length;
    const letrasMaiusculas = palavrasMaiusculas.length;
    const palavrasMinusculas = words.filter(word => /^[a-záéíóúàâêôç]{1}.*$/.test(word) && word.length > 3);
    const letrasMinusculas = palavrasMinusculas.length;

    document.getElementById('letrasMaiusculas').innerText = `Quantidades de palavras com letra maiúscula: ${letrasMaiusculas}`;
    document.getElementById('palavrasMinusculas').innerText = `Quantidade de palavras com letras minusculas: ${letrasMinusculas}`;
    document.getElementById('vogais').innerText = `Quantidade de palavras que começam com vogais acima de 3 caracteres: ${text.match(/\b[aeiouáéíóúàâêô]{4,}\w*/gi)?.length || 0}`;
    document.getElementById('consoantes').innerText = `Quantidade de palavras que começam consoantes acima de 3 caracteres: ${text.match(/\b[b-df-hj-np-tv-zç]{4,}\w*/gi)?.length || 0}`;
    const wordFrequency = {};
    words.forEach(word => {
        const lowerWord = word.toLowerCase();
        wordFrequency[lowerWord] = (wordFrequency[lowerWord] || 0) + 1;
    });
    const repetição = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    document.getElementById('repetição').innerText = `Palavra mais repetida: "${repetição[0][0]}" (${repetição[0][1]} vezes)`;
    document.getElementById('repetição3').innerText = `Palavra mais repetida acima de três caracteres: "${repetição.find(entry => entry[0].length > 3)[0]}" (${repetição.find(entry => entry[0].length > 3)[1]} vezes)`;
    document.getElementById('menosRepetição').innerText = `Palavra menos repetida: "${repetição[repetição.length - 1][0]}" (${repetição[repetição.length - 1][1]} vez)`;
    const maiorPalavra = words.reduce((a, b) => a.length >= b.length ? a : b, "");
    document.getElementById('maiorPalavra').innerText = `Maior palavra: "${maiorPalavra}" (${maiorPalavra.length} letras)`; 