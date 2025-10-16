
function selecionarJogador() {
  // Seleciona todas as imagens
  const imagens = document.querySelectorAll('.listaDeJogadores img');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      // Remove a classe 'selecionado' de todas
      imagens.forEach(i => i.classList.remove('selecionado'));

      // Adiciona apenas a imagem clicada
      img.classList.add('selecionado');
    });
  });
}

// Executa a função quando a página carrega
window.addEventListener('DOMContentLoaded', selecionarJogador);

function inicializarJogadores() {
  const imagens = document.querySelectorAll('.listaDeJogadores img');
  const extraJogadores = document.getElementById('extraJogadores');

  // Dados de cada jogador
  const jogadoresInfo = {
    Endou: {
      nome: "Endou Mamoru",
      descricao: "Goleiro e capitão da Raimon, conhecido por sua paixão pelo futebol e defesas incríveis.",
      imagem: "imagens2/Tecnicas/MaoOmega.png"
    },
    Gouenji: {
      nome: "Shuuya Gouenji",
      descricao: "Atacante poderoso com o chute Flameado, símbolo da força ofensiva da Raimon.",
      imagem: "imagens2/Tecnicas/HeliceDinamite.png"
    },
    Kidou: {
      nome: "Kidou Yuuto",
      descricao: "O cérebro da equipe, especialista em táticas e estratégias de jogo.",
      imagem: "imagens2/Tecnicas/PinguimImperial3.png"
    },
    Aphrodi: {
      nome: "Aphrodi",
      descricao: "Jogador elegante e calmo, conhecido pela técnica 'Deus do Vento Divino'.",
      imagem: "imagens2/Tecnicas/AsasCelestiais.png"
    },
    Fubuki: {
      nome: "Fubuki Shirou",
      descricao: "Atacante talentoso com duas personalidades: uma fria e uma calorosa.",
      imagem: "imagens2/Tecnicas/VendavalEterno.png"
    },
    Midorikawa: {
      nome: "Midorikawa Ryuuji",
      descricao: "Versátil e técnico, alterna entre defesa e ataque com grande habilidade.",
      imagem: "imagens2/Tecnicas/BrilhoVeloz.png"
    },
    Desalmado: {
      nome: "Desalmado",
      descricao: "Membro dos Alius Academy, tem um estilo agressivo e impiedoso.",
      imagem: "imagens2/Tecnicas/BuracoDeMinhoca.png"
    },
    Gazel: {
      nome: "Gazel",
      descricao: "Líder da Diamond Dust, frio e calculista, domina técnicas de gelo.",
      imagem: "imagens2/Tecnicas/ImpactoGlacial.png"
    },
    Burn: {
      nome: "Burn",
      descricao: "Líder da Prominence, impetuoso e explosivo como o fogo.",
      imagem: "imagens2/Tecnicas/BrilhoAtomico.png"
    },
    Hiroto: {
      nome: "Hiroto Kiyama",
      descricao: "Habilidoso e gentil, mistura técnica e inteligência em campo.",
      imagem: "imagens2/Tecnicas/QuedaCelestial.png"
    },
    Choi: {
      nome: "Choi Chan Soo",
      descricao: "Defensor leal e esforçado, sempre protege seus companheiros.",
      imagem: "imagens2/Tecnicas/AtaqueDoDragao.png"
    },
    Ichinose: {
      nome: "Ichinose Kazuya",
      descricao: "Jogador talentoso e disciplinado, com grande espírito esportivo.",
      imagem: "imagens2/Tecnicas/ImpulsoUnicornio.png"
    },
    Fideo: {
      nome: "Fideo Ardena",
      descricao: "Craque italiano conhecido por sua elegância e controle de bola impecável.",
      imagem: "imagens2/Tecnicas/EspadaDeOdin.png"
    },
    Roniejo: {
      nome: "Roniejo",
      descricao: "Um jogador confiante e técnico, sempre pronto para criar jogadas criativas.",
      imagem: "imagens2/Tecnicas/SuperElastico.png"
    },
    Rococo: {
      nome: "Rococo Urupa",
      descricao: "Goleiro excepcional, considerado uma lenda pelos seus reflexos.",
      imagem: "imagens2/Tecnicas/MaoDasAlmas.png"
    },
    Tenma: {
      nome: "Matsukaze Tenma",
      descricao: "Capitão da Raimon na era GO. Um jogador otimista e veloz, conhecido por sua técnica 'Pegasus Break'.",
      imagem: "imagens2/Tecnicas/VentoDivino.png"
    },
    Shindou: {
      nome: "Shindou Takuto",
      descricao: "Maestro do campo, domina o ritmo do jogo e é o cérebro tático da equipe. Sua técnica famosa é o 'Fortissimo'.",
      imagem: "imagens2/Tecnicas/Fortissimo.png"
    },
    Tsurugi: {
      nome: "Tsurugi Kyousuke",
      descricao: "Atacante talentoso e determinado, inicialmente frio, mas fiel aos amigos. Conhecido pelo 'Death Sword'.",
      imagem: "imagens2/Tecnicas/PropençaoDaMorte.png"
    }
  };

  // Configura o clique de cada imagem
  imagens.forEach(img => {
    img.addEventListener('click', () => {
      // Remove a seleção anterior
      imagens.forEach(i => i.classList.remove('selecionado'));
      img.classList.add('selecionado');

      // Mostra as informações do jogador clicado
      const id = img.id;
      const jogador = jogadoresInfo[id];

      if (jogador) {
        extraJogadores.innerHTML = `
          <h2>${jogador.nome}</h2>
          <img src="${jogador.imagem}" alt="${jogador.nome}">
          <p>${jogador.descricao}</p>
        `;
      } else {
        extraJogadores.innerHTML = `<p>Informações não encontradas.</p>`;
      }
    });
  });
}

// Executa a função quando o site for carregado
window.addEventListener('DOMContentLoaded', inicializarJogadores);

