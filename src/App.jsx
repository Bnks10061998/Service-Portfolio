import "./App.css";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <SampleProjects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
