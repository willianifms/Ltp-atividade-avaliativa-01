class Noticia{
  constructor(titulo,data_de_publicação, resumo, texto){
    this.titulo = titulo
    this.data_de_publicação = data_de_publicação
    this.resumo = resumo
    this.texto = texto
  }
  mostrarNoticia(){
    return this.titulo + "\n"+ this.data_de_publicação + "\n"+ this.resumo + "\n"+"\n"+ this.texto
  }
}
let mostar = new Noticia ("Moro faz viagem de pré-campanha à Alemanha para encontrar políticos e empresários", "23/03/2022"," Pré-candidato conversou, em Hamburgo, sobre o acordo comercial entre o Mercosul e a União Europeia. Em Berlim, ele se reuniu com líderes parlamentares alemães na sede do parlamento nacional.", "O pré-candidato à Presidência da República Sergio Moro (Podemos), em viagem de pré-campanha à Alemanha, encontrou políticos e empresários locais para divulgar seu plano de governo A viagem tem sido divulgada pelo pré-candidato em suas contas nas redes sociais. Na segunda-feira (21), Moro postou um vídeo na cidade de Hamburgo. Ele relatou que teve uma reunião com empresários e que conversou com eles sobre o acordo comercial do Mercosul com a União Europeia.Aprovado em 2019, depois de anos de negociação, o acordo ainda precisa da ratificação dos parlamentos dos países para sair do papel. Segundo Moro, os empresários alemães são favoráveis ao acordo, mas o entrave, hoje, é a má imagem do governo brasileiro com relação à destruição da Amazônia.A ideia é abertura. A gente quer abrir o Brasil para o mundo, para inserir o Brasil nas cadeias produtivas. O que a gente coloca é muito simples. É muito fácil resolver esse problema da imagem do Brasil. É uma mudança de discurso e o combate ao desmatamento ilegal, afirmou Moro em vídeo nas suas redes sociais.A gente defendeu a nossa agropecuária. Ela não tem nada a ver com desmatamento na Amazônia. Eu assumi o compromisso a gente tem que resolver esa vulnerabilidade para que a gente possa avançar com esse tratado, completou o pré-candidato.Ele informou ainda que, em Hamburgo, visitou um centro de inteligência artificial, projeto de parceria público-privada entre o governo local, empresários e universidades.") 
console.log(mostar.mostrarNoticia())