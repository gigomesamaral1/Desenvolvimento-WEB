const jogadoresmasc = document.getElementById('jogadoresmasc');
const jogadoras = document.getElementById('jogadoras');

window.onload = () => {
  carregarJogadores();
};

const carregarJogadores = () => {
  const elencoFeminino = jogadores.filter(jogador => jogador.elenco === 'feminino');
  const elencoMasculino = jogadores.filter(jogador => jogador.elenco !== 'feminino');

  elencoFeminino.forEach((jogador, indice) => {
    jogadoras.innerHTML += `
      <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
        <img src="${jogador.imagem}">
        <p>${jogador.nome}</p>
      </div>
    `;
  });

  elencoMasculino.forEach((jogador, indice) => {
    jogadoresmasc.innerHTML += `
      <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
        <img src="${jogador.imagem}">
        <p>${jogador.nome}</p>
      </div>
    `;
  });
};

function salvarInformacoes(indiceJogador) {
  const jogador = jogadores[indiceJogador];

  localStorage.setItem('@Nome', jogador.nome);
  localStorage.setItem('@Imagem', jogador.imagem);
  localStorage.setItem('@Posicao', jogador.posicao);
  localStorage.setItem('@Descricao', jogador.descricao);
  localStorage.setItem('@NomeCompleto', jogador.nome_completo);
  localStorage.setItem('@Nascimento', jogador.nascimento);
  localStorage.setItem('@Altura', jogador.altura);

  window.location.href = './detalhes.html';
}
