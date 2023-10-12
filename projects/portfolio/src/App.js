
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
