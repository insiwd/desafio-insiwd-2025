class AbrigoAnimais {
  constructor() {
    this.animais = {
      Rex:  ["RATO", "BOLA"],
      Mimi: ["BOLA", "LASER"],
      Fofo: ["BOLA", "RATO", "LASER"],
      Zero: ["RATO", "BOLA"],
      Bola: ["CAIXA", "NOVELO"],
      Bebe: ["LASER", "RATO", "BOLA"],
      Loco: ["SKATE", "RATO"],
    };
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    // separando as entradas por vírgula, transformando em lista
    let listaBrinquedos1 = brinquedosPessoa1.split(",");
    let listaBrinquedos2 = brinquedosPessoa2.split(",");
    let listaOrdemAnimais = ordemAnimais.split(",");

    // esse for vai de animal em animal, na ordem que recebemos e processa seus dados
    for (let i = 0; i < listaOrdemAnimais.length; i++) {
      // para cada animal, precisamos pegar os dados no JSON
      let nomeAnimal = listaOrdemAnimais[i]; // i é meu índice atual - começando em 0
      let brinquedosDoAnimal = this.animais[nomeAnimal]; // acessa a lista de brinquedos do animal

      // percorrendo os brinquedos do animal
      // pode começar no 0, que seria o "RATO", e deve rodar enquanto não terminar o array
      for (let j = 0; j < brinquedosDoAnimal.length; j++) {

      }

    } 
  }
}

export { AbrigoAnimais as AbrigoAnimais };
