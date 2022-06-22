import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import "./app.scss"

// app is main application placed onto site when index is accessed
function App() {
    return (
        <div className="app">
            <Navbar/>
            <div className="sections">
                <Intro/>
                <About/>
                <Projects/>
            </div>
        </div>
    );
}

export default App;