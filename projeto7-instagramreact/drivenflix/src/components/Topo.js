import React, { useState } from "react"

export default function Topo() {
    const imagemPadrao = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU"
    const [nome, setNome] = React.useState("")
    const [imagem, setImagem] = useState(imagemPadrao)

    // ternário => condicao ? (valor se for verdadeiro) : (valor se for falso)

    function inserirNome() {
        setNome(prompt("Qual é o seu nome?"))
    }

    function inserirImagem() {
        const imagemAdicionada = prompt("Escolha o link da sua imagem")
        setImagem(imagemAdicionada)
    } 

    return (
        // JSX
        <div className="topo">
            <h1>DrivenFlix</h1>
            <div>
                <button onClick={inserirNome}>Inserir Nome</button>
                <p>{!nome ? "Não sei o seu nome :(" : `Bem-vindo(a), ${nome}!`}</p>
                <img onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} />
            </div>
        </div>
    )
}
