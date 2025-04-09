import "./App.css";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <SampleProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
