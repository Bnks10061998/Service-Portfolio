
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
    <Home />
      <Services />
      <ScrollToTopButton />
      <SampleProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
