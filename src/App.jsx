import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <Home />
      <About />
      <Services />
      <SampleProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
