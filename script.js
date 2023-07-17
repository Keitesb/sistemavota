// Variáveis para contagem de votos
let votes1 = 0;
let votes2 = 0;
let votes3 = 0;

function vote(candidate) {
  // Atualiza a contagem de votos para o candidato escolhido
  switch (candidate) {
    case 1:
      votes1++;
      document.getElementById("votes1").innerText = votes1 + " votos";
      break;
    case 2:
      votes2++;
      document.getElementById("votes2").innerText = votes2 + " votos";
      break;
    case 3:
      votes3++;
      document.getElementById("votes3").innerText = votes3 + " votos";
      break;
    default:
      break;
  }
}
