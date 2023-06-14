document.addEventListener('DOMContentLoaded', function() {
  const divElencoFeminino = document.getElementById('lista_imagens_feminino');
  const divElencoMasculino = document.getElementById('lista_imagens_masculino');

  const elencoFeminino = jogadores.filter(jogador => jogador.elenco === 'feminino');
  const elencoMasculino = jogadores.filter(jogador => jogador.elenco === 'masculino');

  const createJogadorElement = (jogador) => {
    const imgJogador = document.createElement('img');
    imgJogador.src = jogador.imagem;
    imgJogador.style.width = '80%';

    const nomeJogador = document.createElement('p');
    nomeJogador.innerHTML = jogador.nome;
    nomeJogador.style.fontWeight = 'bold';

    const divJogador = document.createElement('div');
    divJogador.className = 'jogador';
    divJogador.appendChild(imgJogador);
    divJogador.appendChild(nomeJogador);

    divJogador.setAttribute('data-nome', jogador.nome);
    divJogador.setAttribute('data-posicao', jogador.posicao);
    divJogador.setAttribute('data-imagem', jogador.imagem);
    divJogador.setAttribute('data-descricao', jogador.descricao);
    divJogador.setAttribute('data-nome_completo', jogador.nome_completo);
    divJogador.setAttribute('data-nascimento', jogador.nascimento);
    divJogador.setAttribute('data-altura', jogador.altura);

    return divJogador;
  };

  const createRowElement = () => {
    const row = document.createElement('div');
    row.className = 'row';
    return row;
  };

  const appendJogadoresToContainer = (jogadores, container) => {
    jogadores.forEach((jogador) => {
      const divJogador = createJogadorElement(jogador);
      container.appendChild(divJogador);
    });
  };

  const createColumnsForJogadores = (jogadores) => {
    const container = document.createElement('div');
    container.className = 'container';

    let row = createRowElement();
    let count = 0;

    jogadores.forEach((jogador) => {
      const divJogador = createJogadorElement(jogador);
      row.appendChild(divJogador);
      count++;

      if (count === 6) {
        container.appendChild(row);
        row = createRowElement();
        count = 0;
      }
    });

    if (count > 0) {
      container.appendChild(row);
    }

    return container;
  };

  const containerFeminino = createColumnsForJogadores(elencoFeminino);
  const containerMasculino = createColumnsForJogadores(elencoMasculino);

  divElencoFeminino.appendChild(containerFeminino);
  divElencoMasculino.appendChild(containerMasculino);

  const storageJogador = document.querySelectorAll('.jogador');

  const manipulaEvento = (evento) => {
    const divJogador = evento.currentTarget;

    localStorage.setItem('nome', divJogador.dataset.nome);
    localStorage.setItem('posicao', divJogador.dataset.posicao);
    localStorage.setItem('imagem', divJogador.dataset.imagem);
    localStorage.setItem('descricao', divJogador.dataset.descricao);
    localStorage.setItem('nome_completo', divJogador.dataset.nome_completo);
    localStorage.setItem('nascimento', divJogador.dataset.nascimento);
    localStorage.setItem('altura', divJogador.dataset.altura);

    window.location.href = './detalhes.html';
  };

  storageJogador.forEach((divJogador) => {
    divJogador.addEventListener('click', manipulaEvento);
  });
});
