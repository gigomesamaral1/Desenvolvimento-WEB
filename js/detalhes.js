document.addEventListener('DOMContentLoaded', function() {
    const infoJogador = document.getElementById('info');
    const fotoInfo = document.getElementById('foto_jog');
    const detalhess = document.getElementById('detalhess');
  
    const nome = localStorage.getItem('@Nome');
    const posicao = localStorage.getItem('@Posicao');
    const imagem = localStorage.getItem('@Imagem');
    const descricao = localStorage.getItem('@Descricao');
    const nomeCompleto = localStorage.getItem('@NomeCompleto');
    const nascimento = localStorage.getItem('@Nascimento');
    const altura = localStorage.getItem('@Altura');


    const imgJogador = document.createElement('img');
    imgJogador.src = imagem;
    imgJogador.style.width = '200px';
  
    const nomeJogador = document.createElement('h2');
    nomeJogador.innerHTML = nome;
  
    const posicaoJogador = document.createElement('p');
    posicaoJogador.innerHTML = `Posição: ${posicao}`;
  
    const nomeCompletoJogador = document.createElement('p');
    nomeCompletoJogador.innerHTML = `Nome Completo: ${nomeCompleto}`;
  
    const nascimentoJogador = document.createElement('p');
    nascimentoJogador.innerHTML = `Nascimento: ${nascimento}`;
  
    const alturaJogador = document.createElement('p');
    alturaJogador.innerHTML = `Altura: ${altura}`;
  
    const descricaoJogador = document.createElement('p');
    descricaoJogador.innerHTML = descricao;
  
    fotoInfo.appendChild(imgJogador);
    detalhess.appendChild(nomeJogador);
    detalhess.appendChild(posicaoJogador);
    detalhess.appendChild(nomeCompletoJogador);
    detalhess.appendChild(nascimentoJogador);
    detalhess.appendChild(alturaJogador);
    detalhess.appendChild(descricaoJogador);
  
    const voltarButton = document.createElement('button');
    voltarButton.innerHTML = 'Voltar';
    voltarButton.addEventListener('click', function() {
      window.history.back();
    });
  
    infoJogador.appendChild(voltarButton);
  });
  