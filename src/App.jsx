import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Specialities from "./components/Specialities";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Feedbacks from "./components/Feedbacks";
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
      <Feedbacks />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;