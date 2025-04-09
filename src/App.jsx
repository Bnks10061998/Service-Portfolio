import "./App.css";
import Contact from "./Pages/Contact/Contact";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <SampleProjects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
