import React from 'react'

export default function Posts() {
    return (
        <div class="posts">
            {postContent.map(item => (<Post fotoUsuario={item.fotoUsuario} fotoPostadaUsuario={item.fotoPostadaUsuario} fotoUsuarioQueCurtiu={item.fotoUsuarioQueCurtiu} perfilQueCurtiu={item.perfilQueCurtiu} likes={item.likes} />))}
        </div>
    )
}

// Função que Mostra os posts na tela e verifica se o user apertou no like ou no salvar
function Post(props) {

    const [iconNameLike, seticonNameLike] = React.useState("heart-outline");
    const [iconColor, setIconColor] = React.useState("heart-outline");
    const [userLike, setUserLike] = React.useState(0);

    const [iconNameSave, seticonNameSave] = React.useState("bookmark-outline");
    const [iconColor2, setIconColor2] = React.useState("bookmark-outline");
    const [userLike2, setUserLike2] = React.useState(0);

    function likeThePost() {
        if (iconNameLike === "heart") {
            seticonNameLike("heart-outline");
            setIconColor("md hydrated");
            setUserLike(0);
        }
        else {
            seticonNameLike("heart");
            setIconColor("md hydrated paintedRed");
            setUserLike(1);
        }
    }

    function pressTheSave() {
        if (iconNameLike === "bookmark") {
            seticonNameSave("bookmark-outline");
            setIconColor2("md hydrated");
            setUserLike2(0);
        }
        else {
            seticonNameSave("bookmark");
            setIconColor2("md hydrated paintedBlack");
            setUserLike2(1);
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoUsuario} />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onDoubleClick={likeThePost} src={props.fotoPostadaUsuario} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={iconColor} onClick={likeThePost} name={iconNameLike}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon class={iconColor2} onCLick={pressTheSave} name={iconNameSave}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.fotoUsuarioQueCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.perfilQueCurtiu}</strong> e <strong>outras {props.likes + userLike} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

const postContent = [
    {fotoUsuario: "assets/meowed.png",
    fotoPostadaUsuario: "assets/gato-telefone.png",
    fotoUsuarioQueCurtiu: "assets/respondeai.png",
    perfilQueCurtiu: "respondeai",
    likes: "101.52" }
    ,
    {fotoUsuario: "assets/barked.png",
    fotoPostadaUsuario: "assets/dog.png",
    fotoUsuarioQueCurtiu: "assets/adorableanimals.png",
    perfilQueCurtiu: "adorable_animals",
    likes: "99.15" }]