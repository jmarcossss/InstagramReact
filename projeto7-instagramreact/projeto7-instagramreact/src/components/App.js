import Navbar from "./Navbar"
import Left from "./Left"
import Sidebar from "./Sidebar"

export default function App() {
    return (
        <div>
            <Navbar />
            <div class="corpo">
                <Left />
                <Sidebar />
            </div>
        </div>
    )
}