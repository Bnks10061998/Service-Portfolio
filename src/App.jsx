import "./App.css";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Contact from "./Pages/Contact/Contact";
import SampleProjects from "./Pages/SampleProjects";

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
