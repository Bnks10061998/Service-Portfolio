import "./App.css";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <Services />
      <ScrollToTopButton />
      <SampleProjects />
      <Footer />
    </div>
  );
}

export default App;
