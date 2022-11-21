export default function SideBar() {
    return (
        <div class="sidebar">
            <NomeFotoUsuario userName={informacoesPerfisSidebar.userName} nick={informacoesPerfisSidebar.nick} profileIMG={informacoesPerfisSidebar.profileIMG} />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {(informacoesPerfisSidebar.suggestion).map(suggestionContent => <InfoSidebar userName={suggestionContent.userName} profileIMG={suggestionContent.profileIMG} reason={suggestionContent.reason} />)}
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

const informacoesPerfisSidebar = {
  userName: "catanacomics", nick: "Catana", profileIMG: "assets/catanacomics.png", suggestion: [
      { userName: "bad.vibes.memes", profileIMG: "assets/badvibesmemes.png", reason: "Segue você" },
      { userName: "chibirdart", profileIMG: "assets/chibirdart.png", reason: "Segue você" },
      { userName: "razoesparaacreditar", profileIMG: "assets/razoesparaacreditar.png", reason: "Novo no Instagram" },
      { userName: "adorable_animals", profileIMG: "assets/adorableanimals.png", reason: "Segue você" },
      { userName: "smallcutecats", profileIMG: "assets/smallcutecats.png", reason: "Segue você" }
  ]
}

function NomeFotoUsuario(props) {
  return (

      <div class="usuario">
      <img src={props.profileIMG} />
      <div class="texto">
          <strong>{props.userName} <ion-icon name="pencil"></ion-icon></strong>
          {props.nick}           
      </div>
      
  </div>
      )
}

function InfoSidebar(props) {
  return (

      
      <div class="sugestao">
      <div class="usuario">
          <img src={props.profileIMG} />
          <div class="texto">
              <div class="nome">{props.userName}</div>
              <div class="razao">{props.reason}</div>
          </div>
      </div>
      <div class="seguir">Seguir</div>
  </div>
      )
}