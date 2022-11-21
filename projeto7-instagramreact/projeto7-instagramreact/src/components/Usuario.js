import {useState} from "react"

export default function Usuario() {
    const [nomeUsuario, setnomeUsuario] = useState("AinnnnCafezinhoooo")
    const [linkImagem, setlinkImagem] = useState("assets/foto_italo.jpeg")

    return (
        <div class="usuario" data-test="nomeUsuario">
            <img data-test="profile-image" src={linkImagem} onClick={() =>{
                const linkDaImagem = prompt("Informe um linkImagem para atualizar o perfil: ")
                return linkDaImagem ?setlinkImagem(linkDaImagem): null
            }}/>
            <div class="texto" data-test="name">
                <strong>Tá gravando</strong>
                <span>
                    {!nomeUsuario ?setnomeUsuario : nomeUsuario}
                    <ion-icon data-test="edit-name" name="pencil" onClick={() => {
                        const nomeDoUsuario = prompt("Informe o nome de usuário: ")
                        return nomeDoUsuario ?setnomeUsuario(nomeDoUsuario) : null
                    }}></ion-icon>
                </span>
            </div>
        </div>
    )
}