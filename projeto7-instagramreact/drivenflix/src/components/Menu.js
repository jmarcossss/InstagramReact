export default function Menu() {
    const menu = [
        { texto: "Home", link: "./home.html", imagem: "https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png" },
        { texto: "Favoritos", link: "./favoritos.html", imagem: "https://icon-library.com/images/white-heart-icon-png/white-heart-icon-png-11.jpg" },
        { texto: "Contatos", link: "./contatos.html", imagem: "https://i.im.ge/2022/09/15/1X4f74.envelope.png" }
    ]

    return (
        <ul className="menu">
            {menu.map((item) => <MenuItem key={item.texto} texto={item.texto} imagem={item.imagem} link={item.link}/> )}
        </ul>
    )
}


function MenuItem(props) {
    console.log(props)
    return (
        <li>
            <img src={props.imagem} />
            <a href={props.link}>{props.texto}</a>
        </li>
    )
}

