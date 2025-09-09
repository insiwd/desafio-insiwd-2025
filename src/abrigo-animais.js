class AbrigoAnimais {
  constructor() {
    this.animais = {
      Rex: ["RATO", "BOLA"],
      Mimi: ["BOLA", "LASER"],
      Fofo: ["BOLA", "RATO", "LASER"],
      Zero: ["RATO", "BOLA"],
      Bola: ["CAIXA", "NOVELO"],
      Bebe: ["LASER", "RATO", "BOLA"],
      Loco: ["SKATE", "RATO"],
    };
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // separando as entradas por vírgula e transformando em array
    let listaBrinquedos1 = brinquedosPessoa1.split(",");
    let listaBrinquedos2 = brinquedosPessoa2.split(",");
    let listaOrdemAnimais = ordemAnimais.split(",");
    let resultados = [];

    // percorre a lista de animais
    for (let i = 0; i < listaOrdemAnimais.length; i++) {
      let nomeAnimal = listaOrdemAnimais[i]; // captura o nome do animal atual
      let brinquedosDoAnimal = this.animais[nomeAnimal]; // usamos o nome do animal para acessar a lista

      if (brinquedosDoAnimal == undefined) {
        return { erro: 'Animal inválido' };
      }
      if (listaOrdemAnimais.indexOf(nomeAnimal, i + 1) !== -1) {
        return { erro: 'Animal inválido'};
      }
      
      // verificando a pessoa1
      let ultimoBrinquedo1 = 0;
      let donoUm = true;
      // loop para percorrer a lista de brinquedos
      for (let j = 0; j < brinquedosDoAnimal.length; j++) {

        let brinquedoEncontrado = listaBrinquedos1.indexOf(brinquedosDoAnimal[j], ultimoBrinquedo1);
        
        if (brinquedoEncontrado == -1) {
          donoUm = false;
          break;
        } else {
          // atualiza a variavel ponteiro
          ultimoBrinquedo1 = brinquedoEncontrado + 1;
        }
      }

      // pessoaDois
      let ultimoBrinquedo2 = 0;
      let donoDois = true;
      for (let j = 0; j < brinquedosDoAnimal.length; j++) {
        let brinquedoEncontrado = listaBrinquedos2.indexOf(brinquedosDoAnimal[j], ultimoBrinquedo2);

        if (brinquedoEncontrado == -1) {
          donoDois = false;
          break;
        }
        else {
          ultimoBrinquedo2 = brinquedoEncontrado + 1;
        }
      }

      // resultado
      let resultadoAnimal = "";
      if (donoUm && !donoDois) {
        resultadoAnimal = `${nomeAnimal} - pessoa 1`;
      } else if (donoDois && !donoUm) {
        resultadoAnimal = `${nomeAnimal} - pessoa 2`;
      } else {
        resultadoAnimal = `${nomeAnimal} - abrigo`;
      }
      resultados.push(resultadoAnimal);
    }
    return { lista: resultados.sort() };
  }
}

export { AbrigoAnimais as AbrigoAnimais };