import React from "react"

const listaPosts = [
  {
    imgPerfil:"assets/img/meowed.svg", 
    usuario:"meowed", 
    imgPost:"assets/img/gato-telefone.svg", 
    imgCurtida:"assets/img/respondeai.svg", 
    usuarioCurtida:"respondeai", 
    numeroCurtidas:"101.523" 
  },
  {
    imgPerfil:"assets/img/barked.svg", 
    usuario:"barked", 
    imgPost:"assets/img/dog.svg", 
    imgCurtida:"assets/img/adorable_animals.svg", 
    usuarioCurtida:"adorable_animals", 
    numeroCurtidas:"99.159"
  }
]

function Post(props) {
  const [nomeBotao, setNomeBotao] = React.useState("heart-outline");

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgPerfil} alt="" />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img 
          src={props.imgPost} 
          alt="" 
          onDoubleClick={() => {
            if(nomeBotao === "heart-outline") {
              setNomeBotao("heart-sharp")
            }
          }}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon 
              name={nomeBotao}
              onClick={() => {
                if(nomeBotao === "heart-outline") {
                  setNomeBotao("heart-sharp")
                } else {
                  setNomeBotao("heart-outline")
                }
              }
              }>
            </ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgCurtida} alt="" />
          <div class="texto">
            Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
    return (
        <div class="posts">
          {listaPosts.map(post =>
          <Post 
            imgPerfil={post.imgPerfil} 
            usuario={post.usuario} 
            imgPost={post.imgPost} 
            imgCurtida={post.imgCurtida} 
            usuarioCurtida={post.usuarioCurtida} 
            numeroCurtidas={post.numeroCurtidas} 
          />)}
        </div>
    )
}