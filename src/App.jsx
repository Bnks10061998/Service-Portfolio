import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import TeamProfiles from "./Components/TeamProfiles";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <Nav />
    <ScrollToTopButton />
    <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="team"><TeamProfiles /></div>
    <div id="projects"><SampleProjects/></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
  );
}

export default App;
