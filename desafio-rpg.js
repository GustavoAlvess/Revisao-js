let nome = "Mouse Finbar";
let classe = "zoologista";
let nivel = 1;
let vida = 3;
let ouro = 100;
let xp = 10;

const HABILIDADE1 = "Especialista em animais";
const HABILIDADE2 = "Carregar armas";
const FRAQUEZA1 = "Bolos";
const FRAQUEZA2 = "Correr";
const NOME_ARMA = "Boomerang";
const DANO_BASE = 50;
const NOME_ARMADURA = "Capa de pele de leão";
const DEFESA_BASE = 20;

//NIVEL 1 a selva - lutar por sua vida fugindo dos capangas do vilão do game, o arqueólogo Russel Van Pelt.

// Finbar correu mas não conseguiu acompanhar os outros, usou de sua habilidade e deu uma arma para o Dr. Bravstone, que acertou os capangas próximos e o levou nas costas para pular na cachoeira =  +150 xp, +50 ouro e passou de nivel

xp += 150;
ouro += 50;
nivel++;

// NIVEL  2, o vilarejo
// O desafio é enfrentar uma cobra peçonhenta e um precisa confiar no outro para que o avanço do jogo dê certo. Dentro do cesto há um elefante e um papel, que é a parte que falta da jóia roubada por Van Pelt e a última parte do mapa

// Finbar usou de sua habilidade 1 edeespecialista em animais e  dominou a cobra para que seus amigos pegassem o pedaço do mapa que faltava, ganhou mais +150 pontos de experiência, subiu para o nivel 3 e perto da cobra havia ouro, + 250 moedas!

xp += 150;
ouro += 250;
nivel++;

// NIVEL 3, o final... ou não
let localAtual = "Pedra de Jumanji";
let missaoAtual = "Nivel 3 - o final... ou não!";

// Agora, eles precisam levar o Olho do Jaguar, que é a joia que foi roubada, e desfazer a maldição que decaiu em Jumanji.

//Bravestone fica responsável de levar a joia até a pedra de Jumanji enquanto os outros do grupo enfrentam os capangas de Van Pelt e, esporadicamente, alguns dos animais que vivem na floresta.

// finbar levou um tiro no peito por um dos capangas de Van Pelt e acabou perdendo uma vida.

vida -= 1;

// uma onca apareceu, mas finbar conhecia a fraqueza dela, domou a onça e garantiu +120 pontos de experiência!

xp += 120;

// tentando distrair os capangas acabou levando mais um tiro, mas usou sua defesa base e não levou nenhum dano, logo depois os atacou com seu boomerang que foi encatado ( dano multiplicado pelo nivel) e ganhou mais 345 pontos de experiência

xp += 345;
let ataqueTotal = nivel * DANO_BASE;

let vidaSuficiente = vida >= 1;
let ataqueForte = ataqueTotal >= 120;
let nivelAvancado = nivel >= 3;

// agora, fibar esa pronto para os proximos desafios?
// Para passar de fase, finbar precisa ter pelo menos 1 vida, 200 de ouro e 400xp

let podeIrParaOutroDesafio = vidaSuficiente && (ataqueForte || nivelAvancado);
// mensagens
console.log(
  `Olá! Eu sou${nome}, da classe ${classe}. Possuo ${vida} vidas, tenho ${xp} pontos de experiência e ${ouro} de ouro.`
);
console.log(`Nível: 1`);
console.log(`Muito bem, ${nome}! Você passou pela fase da selva!`);
console.log(`Você ganhou mais 150 pontos de experiência e 50 moedas de ouro!`);
console.log(`Nível: 2`);
console.log(`É isso aí, ${nome}! Você passou pela fase do vilarejo!`);
console.log(
  ` Você ganhou mais 150 pontos de experiência, encontrou 250 moedas de ouro e passou para a próxima fase! `
);
console.log(`Nível: 3`);
console.log(
  `Você levou um tiro...preste atenção na próxima e tenha mais cuidado! `
);
console.log(`-1 vida :(`);
console.log(
  `${nome} , está pronto para o próximo desafio? ${podeIrParaOutroDesafio}\n`
);

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===
// Resgate seus dados do personagem anterior e adicione:

let nomePersonagem = "Mouse Finbar";
let classePersonagem = "zoologista";
let vidaAtual = vida;
let vidaMaxima = 3;
let manaAtual = 50;
let manaNecessario = 50;
let nivelPersonagem = nivel;
let experiencia = 775;
let ouroPersonagem = 400;

// Novos atributos para batalha
let forca = 6;
let defesa = 10;
let agilidade = 0;
let combatesVencidos = 4;

// Estado atual da história (continue de onde parou no Nível 1)

// Condicionais Simples na narrativa
console.log("O Aviso dos guardas de Jumanji");

// Verificação baseada no nível do personagem
if (nivel < 3) {
  console.log("⚠️ Um guarda o adverte: Você não esta pronto para essa missão!");
  console.log("Mas " + nomePersonagem + " decide prosseguir mesmo assim...");
}

// Verificação de recursos especiais
if (ouro >= 200) {
  console.log(
    "💰 Suas moedas estão em grande volume no seu bolso, atraindo olhares cobiçosos... cuidado! Guarde-as na mochila!"
  );
}

// Verificação de classe específica
if (classe === "zoologista") {
  console.log(
    "O sangue dos animais correm em suas veias... isso pode ser útil!\n"
  );
}

nivelPersonagem++;
//Escolha Estratégica
console.log("Nível 4: o deserto");

// Escolha baseada em recursos
if (ouro >= 50) {
  console.log(
    "💰Com ouro suficiente, " +
      nomePersonagem +
      " adquiriu equipamentos melhores e agora consegue escapar dos avestruzes com mais facilidade!"
  );
  forca += 5;
  defesa += 3;
  ouro -= 50;
  console.log("Força e defesa aumentaram! Ouro restante: " + ouro);
} else {
  console.log(
    "💔 Sem ouro suficiente, " +
      nomePersonagem +
      " deve confiar apenas em suas habilidades!"
  );
  console.log("Seja forte, use das suas habilidades e derrote os avestruzes!");
}
let passaParaNivelCinco = Boolean;
if (experiencia >= 700) {
  passaParaNivelCinco = true;
}

if (passaParaNivelCinco) {
  nivelPersonagem++;
  console.log(
    `🎉 Você passou para o próximo nivel, ${nomePersonagem}! \n Combates vencidos até agora: ${combatesVencidos} \n Nível atual: ${nivelPersonagem}`
  );
}

// Sistema de recompensas narrativo
if (experiencia >= 750) {
  console.log("🎉 A sabedoria acumulada se manifesta! " + nomePersonagem);
  experiencia = 0;
  vidaAtual = vidaMaxima; // Vida restaurada
} else {
  console.log(
    "📊 " + nomePersonagem + " ainda busca mais sabedoria e experiência..."
  );
  console.log("Sabedoria atual: " + experiencia + "/100");
}

//  Nível 5: A Fruta do Deserto
console.log(" Nível 5: A Fruta do Deserto");
let poderInimigo = 12;

// Sistema de combate inteligente baseado na situação
if (vidaAtual < 2) {
  console.log(
    "Com uma vida restante, " + nomePersonagem + " usa uma tática desesperada!"
  );
  console.log("Ataque final com toda a força restante!");
  poderInimigo -= forca * 2;
} else if (manaAtual >= 30 && classe === "zoologista") {
  console.log(
    "✨ " +
      nomePersonagem +
      " utilizou de suas habilidades, detectou o ponto fraco do inimigo e... pimba! Ataque certeiro!"
  );
  console.log("Habilidade devastadora!");
  poderInimigo -= forca + 20;
  manaAtual -= 30;
  if (poderInimigo <= 0) {
    console.log("Macacos derrotados!");
    combatesVencidos++;
    manaAtual += 50;
  }
} else if (forca >= 15) {
  console.log("Com muita força, executa um ataque certeiro!");
  poderInimigo -= forca;
} else {
  console.log("🛡️ Luta defensiva e calculada!");
  poderInimigo -= forca / 2;
  vidaAtual++; // Recupera um pouco de vida
}
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nomePersonagem + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 4
console.log(
  "Após os eventos da " + localAtual + ", nosso herói " + nomePersonagem
);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

// Nível 6

poderInimigo += 80;

if (vidaAtual < 2) {
  console.log(
    "Com uma vida restante, " + nomePersonagem + " usa uma tática desesperada!"
  );
  console.log("Ataque final com toda a força restante!");
  poderInimigo -= forca * 2;
} else if (manaAtual >= 30 && classe === "zoologista") {
  console.log(
    "✨ " +
      nomePersonagem +
      " utilizou de suas armas, e junto com sua equipe fez um ataque certeiro aos capangas de Jurgen!"
  );
  console.log("Muito bem!");
  poderInimigo -= forca + 50;
  manaAtual -= 30;
  if (poderInimigo <= 0) {
    console.log("Jurgen derrotado!");
    combatesVencidos++;
    experiencia += 150
  }
} else if (forca >= 15) {
  console.log("Com muita força, executa um ataque certeiro!");
  poderInimigo -= forca;
} else {
  console.log("🛡️ Luta defensiva e calculada!");
  poderInimigo -= forca / 2; // Recupera um pouco de vida
}

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]

// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
  console.log("\n🎉 VITÓRIA ÉPICA! " + nomePersonagem + " triunfa! Com sua equipe, derrota Junger e seus capangas, cumprindo a missão de devolver as joias aos seus donos! ");
  experiencia += 100;
  combatesVencidos++;
  console.log("A lenda de " + nomePersonagem + " cresce...");
} else {
  console.log(
    "⚔️ A batalha foi árdua, mas " +
      nomePersonagem +
      " sobrevive para lutar outro dia!"
  );
}


console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");



// === CONTINUAÇÃO DA SAGA ÉPICA ===
// === NOVOS ELEMENTOS PARA O CASTELO DO JAGUAR ===
// Inventário mágico - primeira coleção arcana
let inventario = ["Boomerang de osso animal", "Dente de leão", "Couraça de urso"];
let aliados = ["Dr. Bravestone", "Ruby", "Prof. Shelly Oberon"];
let inimigosDerrotados = ["Capangas de Van Pelt", "Cobra peçonhenta", "bando de avestruzes","macacos", "Capangas de Jurgen"];
let salasCastelo = ["Floresta Esmeralda", "Covil dos crocodilos", "Templo perdido"];
let tesouroColetado = [];

console.log("🏰 === " + nomePersonagem + " ADENTRA O CASTELO DO JAGUAR ===");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos:")
for (let i = 0; i < inventario.length; i++) {
  console.log(`- ${inventario[i]}`);
};

// === DESCOBERTA DOS TESOUROS DE JUMANJI ===
console.log("");
console.log("🗝️ Os baús do castelo");

//  Declaração e inicialização
let pocoesEncontradas = ["Cura", "Novas armas", "agilidade"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Poção de vida reserva"; // Upgrade da poção!
console.log("✨ " + nomePersonagem + " aprimorou a poção de cura!");

// Métodos de array fundamentais
inventario.push("Cobra cajado"); // Adiciona no final
console.log(" \n⚗️Novo item adicionado ao inventário!\n Inventário: ");
for (let i = 0; i < inventario.length; i++) {
  console.log(`- ${inventario[i]}`);
};

localAtual = "Castelo do Jaguar"
console.log(`🔎${nomePersonagem}, você chegou ao lugar mais secreto de Jumanji... o ${localAtual}! E agora deve encontrar os tesouros escondidos nele.`);


console.log(`- ${aliados[0]} precisou de uma arma para deixar fixa com ele, dê o ${inventario[3]}!`);
console.log(`- ${aliados[0]} agradece!\n`);


let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: ");
for (let i = 0; i < inventario.length; i++) {
  console.log(`- ${inventario[i]}`);
};




