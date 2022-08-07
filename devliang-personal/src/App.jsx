import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import "./app.scss"
import { useState } from 'react'
import Menu from "./components/menu/Menu"

// app is main application placed onto site when index is accessed
function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Projects/>
                <About/>
            </div>
        </div>
    );
}

export default App;