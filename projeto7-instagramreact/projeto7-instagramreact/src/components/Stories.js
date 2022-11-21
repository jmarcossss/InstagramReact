export default function Stories() {
    return (
        <div class="stories">
            {storiesContent.map(content => <Story img={content.img} nomePerfilUsuario={content.nomePerfilUsuario} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.nomePerfilUsuario}
            </div>
        </div>
    )
}

const storiesContent = [
    {nomePerfilUsuario: "9gag", img: "assets/9gag.png"},
    {nomePerfilUsuario: "meowed", img: "assets/meowed.png"},
    {nomePerfilUsuario: "barked", img: "assets/barked.png"},
    {nomePerfilUsuario: "nathanwpylestrangeplanet", img: "assets/nathanwpylestrangeplanet.png"},
    {nomePerfilUsuario: "wawawicomics", img: "assets/wawawiwacomicsa.png"},
    {nomePerfilUsuario: "respondeai", img: "assets/respondeai.png"},
    {nomePerfilUsuario: "filomoderna", img: "assets/filomoderna.png"},
    {nomePerfilUsuario: "emeriagourmet", img: "assets/memeriagourmet.png"}]
