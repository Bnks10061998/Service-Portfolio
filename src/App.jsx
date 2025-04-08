import "./App.css";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <SampleProjects />
      <Footer />
    </div>
  );
}

export default App;
