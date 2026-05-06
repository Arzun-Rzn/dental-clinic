import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Specialities from "./components/Specialities";
import About from "./components/About";
import Doctors from "./components/Doctors";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <Specialities />
      <About />
      <Doctors />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;