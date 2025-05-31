export const geradorDeTagsDeIdentificacao = (nomeDoPet) => {
  return nomeDoPet.toUpperCase();
}


export const verificarSePodeSerAdotado = (idade,porte) => {
  if (idade >= 1 && porte === 'M') {
    return true;
  }
  return false;
}


export const calcularConsumoDeRacao = (nome, idade, peso) => {
  return peso*300
}


export const decidirTipoDeAtividadePorPorte = (porte) => {

  if (porte === 'pequeno') {
    return 'brincar dentro de casa'
  }
  if (porte === 'medio') {
    return 'brincar fora de casa'
  }
  if (porte === 'grande') {
    return 'correr no parque'
  }
  if (porte === 'gigante') {
    return 'fazer montanhismo'
  }
  return 'Não foi possível decidir a atividade'
}


export const buscarDadoAsync = async () => {
  return 'Pipoca';
} 
