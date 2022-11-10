import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "react-scroll-up";
import Chains from "./components/Chains";
import Supporters from "./components/Supporters";
import Navbar from './components/Navbar'
import Trusters from "./components/Trusters";
import Slider from './components/Slider' 
import ScaleUp from "./components/ScaleUp";
import TestSlider from "./components/TestSlider";

function App() {
  return (
    <section >
      <header className="bg-[url('/public/Icons/Header/header_background.jpg')]  h-[83rem] bg-cover bg-no-repeat">
        <Navbar />
        <Header />
      </header>
      <main>
        <Chains/>
        <Supporters/>
        <Slider/>
        <Trusters/>
        <ScaleUp/>
      </main>
      <Footer />
    </section>
  );
}

export default App;
