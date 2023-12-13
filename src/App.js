import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hello from "./components/Hello/Hello";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Sponsors from "./components/Sponsors/Sponsors";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar/>
      <Hello />
      <Sponsors />
      <Popular />
      <Listing />
      <About />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
