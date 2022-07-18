const listaStories = [
  {
    img:"assets/img/9gag.svg",
    usuario:"9gag"
  },
  {
    img:"assets/img/meowed.svg",
    usuario:"meowed"
  },
  {
    img:"assets/img/barked.svg",
    usuario:"barked"
  },
  {
    img:"assets/img/nathanwpylestrangeplanet.svg",
    usuario:"nathanwpylestrangeplanet"
  },
  {
    img:"assets/img/wawawicomics.svg",
    usuario:"wawawicomics"
  },
  {
    img:"assets/img/respondeai.svg",
    usuario:"respondeai"
  },
  {
    img:"assets/img/filomoderna.svg",
    usuario:"filomoderna"
  },
  {
    img:"assets/img/memeriagourmet.svg",
    usuario:"memeriagourmet"
  }
]

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt="" />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}

export default function Stories() {
    return (
        <div class="stories">
            {listaStories.map(story => <Story img={story.img} usuario={story.usuario} />)}
            
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}