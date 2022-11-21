import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Topo from "./Topo"

export default function App() {
    return (
        <>
            <Topo />
            <div className="row">
                <Menu />
                <Conteudo />
            </div>
        </>
    )
}