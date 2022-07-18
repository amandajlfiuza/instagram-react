const listaSugestoes = [
  {
    img:"assets/img/bad.vibes.memes.svg", 
    usuario:"bad.vibes.memes",
    razao:"Segue você"
  },
  {
    img:"assets/img/chibirdart.svg", 
    usuario:"chibirdart",
    razao:"Segue você"
  },
  {
    img:"assets/img/razoesparaacreditar.svg", 
    usuario:"razoesparaacreditar",
    razao:"Novo no Instagram"
  },
  {
    img:"assets/img/adorable_animals.svg", 
    usuario:"adorable_animals",
    razao:"Segue você"
  },
  {
    img:"assets/img/smallcutecats.svg", 
    usuario:"smallcutecats",
    razao:"Segue você"
  }
]

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} alt="" />
        <div class="texto">
          <div class="nome">{props.usuario}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} alt="" />
      <div class="texto">
        <strong>{props.usuario}</strong>
        {props.nome}
      </div>
    </div>
  )
}

export default function Sidebar() {
    return (
        <div class="sidebar">
          <Usuario 
            img="assets/img/catanacomics.svg" 
            usuario="catanacomics" 
            nome="Catana" 
          />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {listaSugestoes.map(sugestao => 
              <Sugestao 
                img={sugestao.img} 
                usuario={sugestao.usuario} 
                razao={sugestao.razao}  
              />)
            }

          </div>
          
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}