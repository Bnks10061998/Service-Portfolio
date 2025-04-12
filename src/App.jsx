import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./Components/Nav"
import TeamProfiles from './Components/TeamProfiles'

function App() {
  return (
    <div>
      <Nav />
      <ScrollToTopButton />
      <Home />
      <About />
      <Services />
      <TeamProfiles/>
      <SampleProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
