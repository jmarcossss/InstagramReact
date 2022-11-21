import Usuario from "./Usuario"

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {(informacoesPerfisSidebar.suggestion).map(suggestionContent => <InfoSidebar nomeUsuario={suggestionContent.nomeUsuario} profileIMG={suggestionContent.profileIMG} reason={suggestionContent.reason} />)}
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
  nomeUsuario: "catanacomics", nick: "Catana", profileIMG: "assets/catanacomics.png", suggestion: [
      { nomeUsuario: "bad.vibes.memes", profileIMG: "assets/badvibesmemes.png", reason: "Segue você" },
      { nomeUsuario: "chibirdart", profileIMG: "assets/chibirdart.png", reason: "Segue você" },
      { nomeUsuario: "razoesparaacreditar", profileIMG: "assets/razoesparaacreditar.png", reason: "Novo no Instagram" },
      { nomeUsuario: "adorable_animals", profileIMG: "assets/adorableanimals.png", reason: "Segue você" },
      { nomeUsuario: "smallcutecats", profileIMG: "assets/smallcutecats.png", reason: "Segue você" }
  ]
}

function NomeFotoUsuario(props) {
  return (
      <div class="usuario" data-test="user">
      <img src={props.profileIMG} data-test="profile-image"/>
      <div class="texto" data-test="name">
          <strong>{props.nomeUsuario} <ion-icon name="pencil" data-test="edit-name"></ion-icon></strong>
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
                    <div class="nome">{props.nomeUsuario}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}