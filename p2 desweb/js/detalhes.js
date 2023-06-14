document.addEventListener('DOMContentLoaded', function() {
    const infoJogador = document.getElementById('info_jogador');
    const fotoInfo = document.getElementById('foto_info');
    const detalhesInfo = document.getElementById('detalhes_info');
  
    const nome = localStorage.getItem('nome');
    const posicao = localStorage.getItem('posicao');
    const imagem = localStorage.getItem('imagem');
    const descricao = localStorage.getItem('descricao');
    const nomeCompleto = localStorage.getItem('nome_completo');
    const nascimento = localStorage.getItem('nascimento');
    const altura = localStorage.getItem('altura');
  
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
    detalhesInfo.appendChild(nomeJogador);
    detalhesInfo.appendChild(posicaoJogador);
    detalhesInfo.appendChild(nomeCompletoJogador);
    detalhesInfo.appendChild(nascimentoJogador);
    detalhesInfo.appendChild(alturaJogador);
    detalhesInfo.appendChild(descricaoJogador);
  
    const voltarButton = document.createElement('button');
    voltarButton.innerHTML = 'Voltar';
    voltarButton.addEventListener('click', function() {
      window.history.back();
    });
  
    infoJogador.appendChild(voltarButton);
  });
  